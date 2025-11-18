import {Routes} from '@angular/router';

export default <Routes>[
  {
    path: 'playground',
    loadComponent: () => import('./playground/playground').then((m) => m.Playground),
  }
]
