import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-interdependent',
  imports: [],
  template: `
    <div>
      <label for="">Kg</label>
      <input type="number" class="gram" [value]="kg()" (input)="setDeepValue($event, 'kg')">
    </div>
    <div>
      <label for="">g</label>
      <input type="number" class="gram" [value]="g()" (input)="setDeepValue($event, 'g')">
    </div>
  `,
  styleUrl: './interdependent.scss'
})
export class Interdependent {
  sourceType = signal('');
  sourceValue = signal(0)

  kg = computed( () => this.sourceType() === 'kg' ?  this.sourceValue() : this.sourceValue() / 1000)
  g = computed( () => this.sourceType() === 'kg' ?  this.sourceValue() * 1000 : this.sourceValue())

  setDeepValue(event: Event, kg: 'g'|'kg') {
    const target = event.target as HTMLInputElement
    this.sourceValue.set(+target.value)
    this.sourceType.set(kg)
  }
}
