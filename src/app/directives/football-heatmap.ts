import { Directive, ElementRef, input, effect, inject, NgZone } from '@angular/core';

export interface RawPoint {
  x: number; // 0 (Left) to 100 (Right)
  y: number; // 0 (Bottom) to 100 (Top)
}

@Directive({
  selector: 'canvas[appHeatmap]',
  standalone: true
})
export class Heatmap {
  private readonly el = inject(ElementRef<HTMLCanvasElement>);
  private readonly ngZone = inject(NgZone);

  // Inputs
  points = input.required<RawPoint[]>();
  radius = input<number>(60);       // How wide the glow spreads
  maxIntensity = input<number>(10); // Number of pings to reach "Pure Red"
  gridSize = input<number>(2);      // Grouping sensitivity (2% of pitch)

  private gradientPalette!: Uint8ClampedArray;

  constructor() {
    this.createPalette();

    effect(() => {
      const data = this.points();
      this.ngZone.runOutsideAngular(() => {
        const aggregated = this.aggregatePoints(data);
        this.draw(aggregated);
      });
    });
  }

  // Group nearby points to calculate real intensity
  private aggregatePoints(raw: RawPoint[]) {
    const grid: Map<string, {x: number, y: number, count: number}> = new Map();
    const gSize = this.gridSize();

    raw.forEach(p => {
      const gx = Math.round(p.x / gSize) * gSize;
      const gy = Math.round(p.y / gSize) * gSize;
      const key = `${gx}-${gy}`;

      const existing = grid.get(key);
      if (existing) {
        existing.count++;
      } else {
        grid.set(key, { x: gx, y: gy, count: 1 });
      }
    });
    return Array.from(grid.values());
  }

  private draw(data: {x: number, y: number, count: number}[]) {
    const canvas = this.el.nativeElement;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Pass 1: Draw Density Blurs
    data.forEach(p => {
      const canvasX = (p.x / 100) * canvas.width;

      // FLIP LOGIC: Subtract Y from 100 because Canvas 0 is Top
      const canvasY = ((100 - p.y) / 100) * canvas.height;

      const grad = ctx.createRadialGradient(canvasX, canvasY, 0, canvasX, canvasY, this.radius());
      const strength = Math.min(p.count / this.maxIntensity(), 1);

      grad.addColorStop(0, `rgba(0,0,0,${strength})`);
      grad.addColorStop(1, 'rgba(0,0,0,0)');

      ctx.fillStyle = grad;
      ctx.fillRect(canvasX - this.radius(), canvasY - this.radius(), this.radius() * 2, this.radius() * 2);
    });

    // Pass 2: Colorize
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imgData.data;

    for (let i = 0; i < pixels.length; i += 4) {
      const alpha = pixels[i + 3];
      if (alpha > 0) {
        const offset = alpha * 4;
        pixels[i]     = this.gradientPalette[offset];
        pixels[i + 1] = this.gradientPalette[offset + 1];
        pixels[i + 2] = this.gradientPalette[offset + 2];
        // pixels[i + 3] remains the same to keep the glow smooth
      }
    }
    ctx.putImageData(imgData, 0, 0);
  }

  private createPalette() {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    const grad = ctx.createLinearGradient(0, 0, 0, 256);

    // Smooth transition: Cold (Blue) -> Neutral (Green/Yellow) -> Hot (Red)
    grad.addColorStop(0, 'rgba(0, 0, 255, 0)');
    grad.addColorStop(0.2, 'blue');
    grad.addColorStop(0.5, 'lime');
    grad.addColorStop(0.8, 'yellow');
    grad.addColorStop(1, 'red');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1, 256);
    this.gradientPalette = ctx.getImageData(0, 0, 1, 256).data;
  }
}
