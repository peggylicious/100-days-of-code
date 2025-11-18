import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-playground',
  template: `
    <router-outlet/>
  `,
  imports: [
    RouterOutlet
  ],
  styles: `
  `
})

export class PlaygroundComponent {

}
