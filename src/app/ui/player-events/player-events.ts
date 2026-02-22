import {Component, input} from '@angular/core';
import {footballEventsGoogleSet} from '../../feature/data-capture/constants/player-events';
import {FootballEventsData} from '../../feature/data-capture/interfaces/player-events';

@Component({
  selector: 'app-player-events',
  imports: [],
  templateUrl: './player-events.html',
  styleUrl: './player-events.scss',
})
export class PlayerEvents {
  playerEvents = input.required<FootballEventsData>()
}
