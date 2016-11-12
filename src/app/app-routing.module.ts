import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HouseComponent } from './house/house.component';
import { MainComponent } from './main/main.component';
import { PriceAvailabilityComponent } from './price-availability/price-availability.component';
import { SurroundingsComponent } from './surroundings/surroundings.component';
const routes: Routes = [
   { path: '', component: MainComponent},
   { path: 'house', component: HouseComponent},
   { path: 'surroundings', component: SurroundingsComponent},
   { path: 'price-availability', component: PriceAvailabilityComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }