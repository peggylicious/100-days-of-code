import {Component, computed, ElementRef, signal, viewChild} from '@angular/core';

@Component({
  selector: 'app-coordinates',
  imports: [],
  template: `
    <h2>Browser Coordinate</h2>
    <div #square
         class="square"
         (mousemove)="getCoordinates($event)">
      Click anywhere inside this box
    </div>
    @if (coords()) {
      <p>You clicked: ({{ coords().x }}, {{ coords().y }})</p>
      <p>You clicked: ({{ normalizedX() }}, {{ normalizedY() }})</p>
      <p>You clicked Cartesian: ({{ xCartesian() }}, {{ yCartesian() }})</p>
    }

    <div class="pitch"></div>
  `,
  styleUrl: './coordinates.scss'
})
export class Coordinates {
  private square = viewChild<ElementRef<HTMLDivElement>>('square');
  readonly BOX_DIMENSION: number = 400;
  coords = signal<{ x: number; y: number }>({x: 0, y: 0});
  normalizedX = computed(() => (this.coords().x/this.BOX_DIMENSION) * 100)
  normalizedY = computed(() => (this.coords().y/this.BOX_DIMENSION) * 100)
  xCartesian = computed(() => this.normalizedX() - 50)
  yCartesian = computed(() => 50 - this.normalizedY())

  
  getCoordinates(event: MouseEvent) {
    const squareElement = this.square();
    if (squareElement) {
      const rect = squareElement.nativeElement.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      this.coords.set({ x, y });
    }
  }
}
