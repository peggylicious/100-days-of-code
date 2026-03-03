import {Component, ElementRef, input, model, signal, viewChild} from '@angular/core';
import {Player} from '../../feature/data-capture/interfaces/player';

@Component({
  selector: 'app-player-card',
  imports: [],
  templateUrl: './player-card.html',
  styleUrl: './player-card.scss',
})
export class PlayerCard {
  player = model.required<Player>();
  active = input.required<boolean>();
  jerseyNo = viewChild<ElementRef<HTMLInputElement>>('jersey_no')
  playerName = viewChild<ElementRef<HTMLInputElement>>('player_name')
  isEditing = signal<boolean>(false);

  editJersey(event: Event, type: 'name' | 'jersey') {
    event.stopPropagation()
    this.isEditing.set(true);
    if (type === 'name') {
      this.playerName()?.nativeElement.focus();
    }else{
      this.jerseyNo()?.nativeElement.focus();
    }
  }

  updatePlayer(event: Event){
    if(this.isEditing()){
      this.isEditing.set(false)
      const jersey_no = this.jerseyNo()?.nativeElement.value!;
      const name = this.playerName()?.nativeElement.value!;
      this.player.update(player => {
        return {
          ...player,
          name,
          jersey_no: jersey_no
        }
      })
      this.jerseyNo()?.nativeElement.blur();
      this.playerName()?.nativeElement.blur();
    }
  }
}
