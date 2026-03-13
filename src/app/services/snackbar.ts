import {Injectable, signal} from '@angular/core';
import {AlertProp} from '../feature/data-capture/interfaces/shared';

@Injectable({
  providedIn: 'root',
})
export class Snackbar {
  public alerts = signal<{id: string, alert: AlertProp, player?: string}[]>([])

  updateAlert(alert: AlertProp, player?: string) {
    const id = crypto.randomUUID();
    this.alerts.update(state => {
      return [...state, {id: id, alert, player}]
    })
  }

  removeAlert(id: string){
    this.alerts.update(state => {
      return state.filter(x => x.id !== id)
    })
  }
}
