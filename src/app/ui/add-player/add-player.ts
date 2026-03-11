import {Component, ElementRef, Input, input, model, output, signal, viewChild} from '@angular/core';
import {Player} from '../../feature/data-capture/interfaces/player';
import {POSITIONS} from '../../feature/data-capture/constants/player';

@Component({
  selector: 'app-add-player',
  imports: [

  ],
  templateUrl: './add-player.html',
  styleUrl: './add-player.scss',
})
export class AddPlayer {
  player = model.required<Player>();
  active = input.required<boolean>();
  // isOpen = input<boolean>(false);
  newPlayer = output<Player>();
  closeModal = output<boolean>();
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

  updatePlayer(jersey_no: string, name: string, position: string){
      this.player.update(player => {
        return {
          ...player,
          name,
          jersey_no,
          position: this.selectPosition(position)
        }
      })
  }

  protected readonly POSITIONS = POSITIONS;

  selectPosition(key: string) {
    console.log('selectPosition', key);
    return POSITIONS.find(pos => pos.key === key)!;
  }

  submit(jersey: HTMLInputElement, pName: HTMLInputElement, pos: HTMLSelectElement) {
    const jersey_no = jersey.value
    const name = pName.value
    const position = pos.value
    this.updatePlayer(jersey_no, name, position);
    this.newPlayer.emit(this.player())
  }

  close() {
    this.closeModal.emit(true)
  }
}
