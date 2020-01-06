import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeatTypeModalPage } from './seat-type-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SeatTypeModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeatTypeModalPageRoutingModule {}
