import {Component, computed, output, signal} from '@angular/core';
import {FIELD_ZONES, swapedCoords} from '../../feature/data-capture/constants/field-zones';
import {MatchingZone, Zone} from '../../feature/data-capture/interfaces/pitch';
const INITIAL_PITCH_CONFIG = {
  pixelX: 0,
  pixelY: 0,
  pitchWidth: 0,
  pitchLength: 0
}
@Component({
  selector: 'app-pitch',
  imports: [],
  templateUrl: './pitch.html',
  styleUrl: './pitch.scss'
})
export class Pitch {
  private readonly SCALE = 100;
  zones: Zone[] = swapedCoords;
  private pitchConfig = signal(INITIAL_PITCH_CONFIG);

  onSelectPitchConfig = output<MatchingZone>();
actualPitchLengthM = 105;
actualPitchWidthM = 68; /* use 68 instead of 58 for realistic ratio */
// mobilePitchWidth: 200px; /* this represents the shorter side (width) */
pitchRatio = 1.544; /* 105 ÷ 68 */
// pitch-border: 2px solid #fff;
// pitch-center-circle-radius: 9.15; // 1.59 * 2
// pitch-center-circle-diameter: var(--pitch-center-circle-radius) * 2; // 1.59 * 2

actualPenaltyWidthLg = 40.3;
actualPenaltyLengthLg = 16.5;
actualPenaltyWidthsm = 18.3;
actualPenaltyLengthsm = 5.5;
pitchCenterCircleRadius = 9.15; // 1.59 * 2
pitchCenterCircleDiameter = this.pitchCenterCircleRadius * 2;
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

  // pitchLength = signal(0);
  // pitchWidth = signal(0);
  normalizedX = computed(() => this.pitchConfig().pixelX / this.pitchConfig().pitchLength)
  normalizedY = computed(() => (this.pitchConfig().pixelY / this.pitchConfig().pitchWidth))
  normalizedXByScale = computed(() => this.normalizedX() * this.SCALE)
  normalizedYByScale = computed(() =>  this.normalizedY() * this.SCALE)
  clampedX = computed(() =>  Math.max(0, Math.min(100, this.normalizedXByScale())))
  clampedY = computed(() => Math.max(0, Math.min(100, this.normalizedYByScale())))
  selectedCoordinate = signal<{x: number, y: number}>({x: 0, y: 0})

  getOffset($event: MouseEvent) {
    const clientDimensions = ($event.target as HTMLElement);
    this.pitchConfig.set({
      pixelX: $event.offsetX,
      pixelY: $event.offsetY,
      pitchWidth: clientDimensions.offsetHeight,
      pitchLength: clientDimensions.offsetWidth
    })
    console.log(this.normalizedX(), ' --- ', this.normalizedY());
    console.log(this.clampedX(), ' --- ', this.clampedY());
    this.onSelectPitchConfig.emit(this.getZoneConfig())
    this.selectedCoordinate.update(state => ({...state, x: this.pitchConfig().pixelX, y: this.pitchConfig().pixelY}))
  }

  getZoneConfig(): MatchingZone  {
    const foundIndex =  this.zones.findIndex(zone => {
      const inRangeX = this.clampedX() >= zone.coordinates.x1 && this.clampedX() <= zone.coordinates.x2
      const inRangeY = this.clampedY() >= zone.coordinates.y1 && this.clampedY() <= zone.coordinates.y2
      return inRangeX && inRangeY
    })

    return {
      zone: this.zones[foundIndex],
      x: this.clampedX(),
      y: this.transformYOriginToBottom(this.clampedY())
    }
  }

  transformYOriginToBottom(y: number): number{
    return (this.SCALE - y)
  }
}
