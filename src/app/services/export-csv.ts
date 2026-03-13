import {Injectable} from '@angular/core';
import {MatchEventLogEntry} from '../feature/data-capture/interfaces/player';

@Injectable({
  providedIn: 'root',
})

export class ExportCsv {
  exportLocalStorageToCsv(storageKey: string, filename: string) {
    // 1. Get and Parse data
    const data = localStorage.getItem(storageKey);
    if (!data) {
      console.error('No data found in localStorage for key:', storageKey);
      return;
    }

    try {
      const jsonData: MatchEventLogEntry[] = JSON.parse(data);
      const flattenedData = this.flattenedData(jsonData)
      const csvString = this.generateCsvString(flattenedData);
      this.downloadCsv(csvString, filename);
    } catch (e) {
      console.error('Error parsing localStorage data. Is it valid JSON?', e);
    }
  }

  private generateCsvString(data: any[]): string {
    if (!data.length) return '';

    const head = Object.keys(data[0]);

    const rowData = data.map(row =>
      head.map(fieldName => {
        // Handle null/undefined and escape double quotes
        let cell = row[fieldName] ?? '';
        cell = cell.toString().replace(/"/g, '""');

        // Wrap in double quotes if it contains a comma, newline, or quote
        if (/[",\n\r]/.test(cell)) {
          cell = `"${cell}"`;
        }
        return cell;
      }).join(',')
    );

    // Return header row + all data rows
    return [head.join(','), ...rowData].join('\r\n');
  }

  private downloadCsv(content: string, filename: string) {
    // \ufeff is the Byte Order Mark for Excel UTF-8 compatibility
    const blob = new Blob(['\ufeff' + content], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `${filename}.csv`;
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  flattenedData(data: MatchEventLogEntry[]){
    return data.map(entry => {
      return {
        matchTime: entry.matchTime,
        timestamp: entry.timestamp,
        playerId: entry.playerId,
        playerName: entry.playerName,
        eventTypeId: entry.eventTypeId,
        eventTypeName: entry.eventTypeName,
        categoryType: entry.categoryType,
        outcome: entry.outcome.id,
        "x-coordinates": entry.coordinates.x,
        "y-coordinates": entry.coordinates.y,
        "x-offset": entry.offset.x,
        "y-offset": entry.offset.y,
      }
    })
  }
}
