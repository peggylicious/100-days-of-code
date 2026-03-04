import {Component, computed, effect, ElementRef, input, output, signal, untracked, viewChild} from '@angular/core';
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
  eventContainer = viewChild<ElementRef>('event_container')
  outcomeWrapper = viewChild<ElementRef>('outcome_wrapper')
  playerEvents = input.required<FootballEventsData>()
  selectedItem = signal<FootballItem | null>(null)
  isOutside = signal(false);
  outcomeVerticalPosition = signal<string>('')
  selectedOutcomeIcon = computed(() => {
    return this.playerEvents().outcomes.filter(outcome => this.selectedItem()?.allowedOutcomes.includes(outcome.id)).map(outcome => outcome.icon)
  })
  onSelectedPlayerEvent = output<{item: FootballItem, outcome: EventOutcome}>()

  constructor() {
    effect(() => {
      if(this.selectedItem()){
        this.checkOverflow()
      }
    });
  }
  showOutcomes<T extends FootballItem>(item: T) {
    this.selectedItem.set(null)
    this.selectedItem.set(item)
    // this.checkOverflow()
  }

  selectOutcome(item: string) {
    if(!this.selectedItem()){
      return
    }
    this.onSelectedPlayerEvent.emit({item: this.selectedItem()!, outcome: this.playerEvents().outcomes.filter(el => el.id === item)[0]})
    this.selectedItem.set(null)
    console.log(item)
  }

  checkOutside(){
    const x = this.outcomeWrapper()?.nativeElement.getBoundingClientRect()
  }

  checkOverflow() {
    // this.eventContainer.
    setTimeout(() => {
      const p = this.eventContainer()?.nativeElement.getBoundingClientRect();
      const c = this.outcomeWrapper()?.nativeElement.getBoundingClientRect();
      // console.log(p, c)
      if (p && c) {
        // Is the bottom of the list lower than the bottom of the container?
        const outside = c.bottom > p.bottom;

        this.isOutside.set(outside);
        console.log(c.bottom, p.bottom)

        if (outside) {
          console.log("Mummy, the list is officially longer than the container!", c.bottom-p.bottom);
          // this.outcomeWrapper()!.nativeElement.style.bottom = '63px'
          const diff = Math.max(0, c.bottom - p.bottom);
          console.log(diff)

          this.outcomeVerticalPosition.set(-(c.bottom-p.bottom) + 'px')
          // this.outcomeWrapper()!.nativeElement.style.top = -(diff + 50) + 'px'
        } else{
          // this.isOutside.set(false)
          console.log("Not Mummy, the list is officially longer than the container!", c.bottom-p.bottom);

          // this.outcomeVerticalPosition.set(50 + 'px')

        }
      }
    }, 0)
  }
}
