import { provideRouter, RouterConfig } from '@angular/router';
import { MainComponent } from './main';
import { HouseComponent } from './house';
import { SurroundingsComponent } from './surroundings';
import { PriceAvailabilityComponent } from './price-availability';

const routes: RouterConfig = [
   { path: '', component: MainComponent},
   { path: 'house', component: HouseComponent},
   { path: 'surroundings', component: SurroundingsComponent},
   { path: 'price-availability', component: PriceAvailabilityComponent}
];

export const APP_ROUTER_PROVIDERS  = [
  provideRouter(routes)
];