import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeAvailabilityPage } from './change-availability.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeAvailabilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeAvailabilityPageRoutingModule {}
