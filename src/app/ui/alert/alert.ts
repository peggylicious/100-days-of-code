import {Component, ElementRef, inject, input, output, signal, viewChildren} from '@angular/core';
import {AlertProp} from '../../feature/data-capture/interfaces/shared';



@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.html',
  styleUrl: './alert.scss',
})
export class Alert {
  host = inject(ElementRef)
  prop = input<AlertProp>({cssClass: 'success', duration: 70000, message: 'Close alert'});
  close = signal<boolean>(false)
  closed = output()
  timerId: number = 0
  componentLength = signal(0)

  ngOnInit() {
    this.timerId = setTimeout(() => {
      this.close.set(true)
      this.closed.emit()
    }, this.prop().duration)

    const parentLength = this.host.nativeElement.parentElement.children.length
    this.componentLength.update(state => state + (parentLength * 5))
  }

  closeManually(){
    if(this.timerId){
      clearTimeout(this.timerId)
    }
    this.close.set(true)
    this.closed.emit()
  }
}
