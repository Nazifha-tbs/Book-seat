import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NearbyTheaterPage } from './nearby-theater.page';

const routes: Routes = [
  {
    path: '',
    component: NearbyTheaterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NearbyTheaterPageRoutingModule {}
