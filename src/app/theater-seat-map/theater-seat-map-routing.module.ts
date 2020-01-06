import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TheaterSeatMapPage } from './theater-seat-map.page';

const routes: Routes = [
  {
    path: '',
    component: TheaterSeatMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheaterSeatMapPageRoutingModule {}
