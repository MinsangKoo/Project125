import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaffieneTrackerPage } from './caffiene-tracker.page';

const routes: Routes = [
  {
    path: '',
    component: CaffieneTrackerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaffieneTrackerPageRoutingModule {}
