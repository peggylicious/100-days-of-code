import {Component, computed, input, Input, output, signal} from '@angular/core';
import {
  FIELD_ZONES,
  INITIAL_PITCH_CONFIG,
  PITCH_SPECS,
  swapedCoords
} from '../../feature/data-capture/constants/field-zones';
import {MatchingZone, PitchConfig, Zone} from '../../feature/data-capture/interfaces/pitch';
import {Heatmap} from '../../directives/football-heatmap';

@Component({
  selector: 'app-pitch',
  imports: [
    Heatmap
  ],
  templateUrl: './pitch.html',
  styleUrl: './pitch.scss'
})
export class Pitch {
  /**
   * NB: IMPORTANT: !!!
   *
   * The **pitchWidth** is the shortest part of the pitch in px
   * The **pitchLength** is the longest part of the pitch in px
   * The normalized **normalizedX** coordinate is calculated by dividing the point x-pixel of the mouse by the pixel length of the pitch
   * The normalized **normalizedY* coordinate is calculated by dividing the point y-pixel of the mouse by the pixel width of the pitch
   * Additional subtraction on **normalizedY** is to make sure Y coordinate starts from bottom left instead of top left
   * So, in summary This system is designed for pitch point of origin to start from bottom left
   */

  public heatMap = input<{show: boolean, map: {x: number; y: number}[]}>();
  public highlightedCoordinate = input<{ x: number; y: number }>();

  public onSelectPitchConfig = output<PitchConfig>();

  public readonly pitchSpecs = PITCH_SPECS
  private zones: Zone[] = swapedCoords;
  private pitchConfig = signal(INITIAL_PITCH_CONFIG);
  public selectedCoordinate = signal<{x: number, y: number}>({x: 0, y: 0})

  private normalizedX = computed(() => this.pitchConfig().pixelX / this.pitchConfig().pitchLength)
  private normalizedY = computed(() => (this.pitchConfig().pixelY / this.pitchConfig().pitchWidth))
  private normalizedXByScale = computed(() => this.normalizedX() * this.pitchSpecs.scale)
  private normalizedYByScale = computed(() =>  this.normalizedY() * this.pitchSpecs.scale)
  private clampedX = computed(() =>  Math.max(0, Math.min(100, this.normalizedXByScale())))
  private clampedY = computed(() => Math.max(0, Math.min(100, this.normalizedYByScale())))

  getOffset($event: MouseEvent) {
    const clientDimensions = ($event.target as HTMLElement);
    this.pitchConfig.set({
      pixelX: $event.offsetX,
      pixelY: $event.offsetY,
      pitchWidth: clientDimensions.offsetHeight,
      pitchLength: clientDimensions.offsetWidth
    })

    this.onSelectPitchConfig.emit({zoneConfig: this.getZoneConfig(), offsetConfig: {x: $event.offsetX, y: $event.offsetY}});
    this.selectedCoordinate.update(state => ({...state, x: this.pitchConfig().pixelX, y: this.pitchConfig().pixelY}))
  }

  getZoneConfig(): MatchingZone  {
    const foundIndex =  this.zones.findIndex(zone => {
      const inRangeX = this.clampedX() >= zone.coordinates.x1 && this.clampedX() <= zone.coordinates.x2
      const inRangeY = this.clampedY() >= zone.coordinates.y1 && this.clampedY() <= zone.coordinates.y2
      return inRangeX && inRangeY
    })
    const roundedX = Math.round(this.clampedX() * 100) / 100
    const roundedY = Math.round(this.transformYOriginToBottom(this.clampedY()) * 100) / 100

    return {
      zone: this.zones[foundIndex],
      x: roundedX,
      y: roundedY
    }
  }

  transformYOriginToBottom(y: number): number{
    return (this.pitchSpecs.scale - y)
  }
}
