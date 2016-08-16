import { provideRouter, RouterConfig } from '@angular/router';
import { MainComponent } from './main';

const routes: RouterConfig = [
   { path: 'main', component: MainComponent},
   { path: '', component: MainComponent}
];

export const APP_ROUTER_PROVIDERS  = [
  provideRouter(routes)
];