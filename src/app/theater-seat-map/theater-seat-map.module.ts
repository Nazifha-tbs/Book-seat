import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TheaterSeatMapPageRoutingModule } from './theater-seat-map-routing.module';

import { TheaterSeatMapPage } from './theater-seat-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TheaterSeatMapPageRoutingModule
  ],
  declarations: [TheaterSeatMapPage]
})
export class TheaterSeatMapPageModule {}
