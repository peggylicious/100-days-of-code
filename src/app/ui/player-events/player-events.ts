import {Component, computed, input, output, signal} from '@angular/core';
import {footballEventsGoogleSet} from '../../feature/data-capture/constants/player-events';
import {
  EventOutcome,
  FootballCategory,
  FootballEventsData,
  FootballItem
} from '../../feature/data-capture/interfaces/player-events';

@Component({
  selector: 'app-player-events',
  imports: [],
  templateUrl: './player-events.html',
  styleUrl: './player-events.scss',
})
export class PlayerEvents {
  playerEvents = input.required<FootballEventsData>()
  selectedItem = signal<FootballItem | null>(null)
  selectedOutcomeIcon = computed(() => {
    return this.playerEvents().outcomes.filter(outcome => this.selectedItem()?.allowedOutcomes.includes(outcome.id)).map(outcome => outcome.icon)
  })
  onSelectedPlayerEvent = output<{item: FootballItem, outcome: EventOutcome}>()

  showOutcomes<T extends FootballItem>(item: T) {
    this.selectedItem.set(item)
    console.log(item.allowedOutcomes)
  }

  selectOutcome(item: string) {
    if(!this.selectedItem){
      return
    }
    this.onSelectedPlayerEvent.emit({item: this.selectedItem()!, outcome: this.playerEvents().outcomes.filter(el => el.id === item)[0]})
    this.selectedItem.set(null)
    console.log(item)
  }
}
