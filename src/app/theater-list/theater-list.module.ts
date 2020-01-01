import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TheaterListPageRoutingModule } from './theater-list-routing.module';

import { TheaterListPage } from './theater-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TheaterListPageRoutingModule
  ],
  declarations: [TheaterListPage]
})
export class TheaterListPageModule {}
