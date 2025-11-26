import { Component } from '@angular/core';
import {Pitch} from '../../../ui/pitch/pitch';
import {MatchingZone} from '../interfaces/pitch';

@Component({
  selector: 'app-playground',
  imports: [
    Pitch
  ],
  templateUrl: './playground.html',
  styleUrl: './playground.scss'
})
export class Playground {

  updatePlayerEntry($event: MatchingZone) {
    console.log('updatePlayerEntry', $event);
  }
}
