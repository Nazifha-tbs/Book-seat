import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TheaterListPage } from './theater-list.page';

const routes: Routes = [
  {
    path: '',
    component: TheaterListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheaterListPageRoutingModule {}
