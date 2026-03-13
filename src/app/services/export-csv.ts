import {Injectable} from '@angular/core';

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
      const jsonData = JSON.parse(data);
      const csvString = this.generateCsvString(jsonData);
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
}
