import {Component, input, Input} from '@angular/core';
import {Player} from '../../feature/data-capture/interfaces/player';

@Component({
  selector: 'app-player-card',
  imports: [],
  templateUrl: './player-card.html',
  styleUrl: './player-card.scss',
})
export class PlayerCard {
  player = input.required<Player>();

}
