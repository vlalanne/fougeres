import { provideRouter, RouterConfig } from '@angular/router';
import { MainComponent } from './main';
import { SurroundingsComponent } from './surroundings';
import { PriceAvailabilityComponent } from './price-availability';

const routes: RouterConfig = [
   { path: '', component: MainComponent},
   { path: 'main', component: MainComponent},
   { path: 'surroundings', component: SurroundingsComponent},
   { path: 'price-availability', component: PriceAvailabilityComponent}
];

export const APP_ROUTER_PROVIDERS  = [
  provideRouter(routes)
];