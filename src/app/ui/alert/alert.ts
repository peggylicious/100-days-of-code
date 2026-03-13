import {Component, computed, ElementRef, inject, input, output, signal, viewChildren} from '@angular/core';
import {AlertProp} from '../../feature/data-capture/interfaces/shared';



@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.html',
  styleUrl: './alert.scss',
})
export class Alert {
  public prop = input.required<AlertProp>();
  public player = input<string>()
  public close = signal<boolean>(false)
  public closed = output()

  public componentLength = signal(0)
  public duration = computed(() => this.prop().duration ?? 2000)
  public cssClass = computed(() => this.prop().cssClass ?? 'success')
  public message = computed(() => this.prop().message ?? 'Close alert')
  public position = computed(() => this.prop().position ?? 'top')
  public type = computed(() => this.prop().type ?? undefined)

  private host = inject(ElementRef)
  private timerId: number = 0


  ngOnInit() {
    this.timerId = setTimeout(() => {
      this.close.set(true)
      this.closed.emit()
    }, this.duration())

    const parentLength = this.host.nativeElement.parentElement.children.length
    this.componentLength.update(state => state + (parentLength * 5))
  }

  public closeManually(){
    if(this.timerId){
      clearTimeout(this.timerId)
    }
    this.close.set(true)
    this.closed.emit()
  }
}
