import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaffieneTrackerPageRoutingModule } from './caffiene-tracker-routing.module';

import { CaffieneTrackerPage } from './caffiene-tracker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaffieneTrackerPageRoutingModule
  ],
  declarations: [CaffieneTrackerPage]
})
export class CaffieneTrackerPageModule {}
