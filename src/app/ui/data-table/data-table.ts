import {Component, input, output} from '@angular/core';
import {MatchEventLogEntry} from '../../feature/data-capture/interfaces/player';
import {MatchEventPipe} from '../../feature/data-capture/pipes/match-event-pipe';

@Component({
  selector: 'app-data-table',
  imports: [
    MatchEventPipe
  ],
  templateUrl: './data-table.html',
  styleUrl: './data-table.scss',
})
export class DataTable {
  playerTableEntry = input.required<MatchEventLogEntry[]>()
  showSelectedCoordinate = output<MatchEventLogEntry | null>();
  showSelectedCoordinateAndSeek = output<number>();
}
