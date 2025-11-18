import { Routes } from '@angular/router';
// import {Coordinates} from './ui/coordinates/coordinates';
// import {Interdependent} from './ui/interdependent/interdependent';
// import {Pitch} from './ui/pitch/pitch';

export const routes: Routes = [
  // {
  //   path: 'coordinates',
  //   component: Coordinates,
  // },
  // {
  //   path: 'kg-g',
  //   component: Interdependent
  // },
  // {
  //   path: 'pitch',
  //   component: Pitch
  // },
  {
    path: 'match',
    loadChildren: () => import('./feature/data-capture/data-capture.routes')
  }
];
