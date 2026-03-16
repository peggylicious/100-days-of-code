import { Pipe, PipeTransform } from '@angular/core';
import {footballEventsGoogleSet} from '../constants/player-events';
// Flatten the nested categories into a single lookup object
export const EVENT_METADATA = footballEventsGoogleSet.categories.reduce((acc, cat) => {
  cat.items.forEach(item => {
    acc[item.id] = { icon: item.icon, color: item.color };
  });
  return acc;
}, {} as Record<string, { icon: string; color: string }>);
@Pipe({
  name: 'matchEvent',
})
export class MatchEventPipe implements PipeTransform {

  transform(eventTypeId: string, property: 'icon' | 'color') {
    for (const category of footballEventsGoogleSet.categories) {
      for (const item of category.items) {
        if (item.id === eventTypeId) {
          return item[property];
        }
      }
    }
    return property === 'icon' ? 'help' : '#ccc';
  }

}
