import { Component } from '@angular/core';
import {Pitch} from '../../../ui/pitch/pitch';
import {MatchingZone} from '../interfaces/pitch';
import {PlayerEvents} from '../../../ui/player-events/player-events';
import {footballEventsGoogleSet} from '../constants/player-events';

@Component({
  selector: 'app-playground',
  imports: [
    Pitch,
    PlayerEvents
  ],
  templateUrl: './playground.html',
  styleUrl: './playground.scss'
})
export class Playground {
  public PLAYER_EVENTS = footballEventsGoogleSet

  updatePlayerEntry($event: MatchingZone) {
    console.log('updatePlayerEntry', $event);
  }
}
