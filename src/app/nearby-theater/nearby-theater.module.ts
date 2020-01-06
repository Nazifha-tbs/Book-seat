import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NearbyTheaterPageRoutingModule } from './nearby-theater-routing.module';

import { NearbyTheaterPage } from './nearby-theater.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearbyTheaterPageRoutingModule
  ],
  declarations: [NearbyTheaterPage]
})
export class NearbyTheaterPageModule {}
