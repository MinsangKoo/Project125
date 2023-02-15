import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Connect2Page } from './connect2.page';

const routes: Routes = [
  {
    path: '',
    component: Connect2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Connect2PageRoutingModule {}
