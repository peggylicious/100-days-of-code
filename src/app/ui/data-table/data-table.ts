import {Component, input, output} from '@angular/core';
import {MatchEventLogEntry} from '../../feature/data-capture/interfaces/player';

@Component({
  selector: 'app-data-table',
  imports: [],
  templateUrl: './data-table.html',
  styleUrl: './data-table.scss',
})
export class DataTable {
  playerTableEntry = input.required<MatchEventLogEntry[]>()
  showSelectedCoordinate = output<MatchEventLogEntry | null>();
}
