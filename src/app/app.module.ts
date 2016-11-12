import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HouseComponent } from './house/house.component';
import { MainComponent } from './main/main.component';
import { PriceAvailabilityComponent } from './price-availability/price-availability.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SurroundingsComponent } from './surroundings/surroundings.component';

@NgModule({
  declarations: [
    AppComponent,
    HouseComponent,
    MainComponent,
    PriceAvailabilityComponent,
    SlideshowComponent,
    SurroundingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
