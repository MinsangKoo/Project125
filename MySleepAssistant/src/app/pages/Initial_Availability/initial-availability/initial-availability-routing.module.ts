import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitialAvailabilityPage } from './initial-availability.page';

const routes: Routes = [
  {
    path: '',
    component: InitialAvailabilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitialAvailabilityPageRoutingModule {}
