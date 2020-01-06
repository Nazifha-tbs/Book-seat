import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeatTypeModalPageRoutingModule } from './seat-type-modal-routing.module';

import { SeatTypeModalPage } from './seat-type-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeatTypeModalPageRoutingModule
  ],
  declarations: [SeatTypeModalPage]
})
export class SeatTypeModalPageModule {}
