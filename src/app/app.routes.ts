import { provideRouter, RouterConfig } from '@angular/router';
import { MainComponent } from './main';
import { SurroundingsComponent } from './surroundings';

const routes: RouterConfig = [
   { path: '', component: MainComponent},
   { path: 'main', component: MainComponent},
   { path: 'surroundings', component: SurroundingsComponent}
];

export const APP_ROUTER_PROVIDERS  = [
  provideRouter(routes)
];