import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InitialAvailabilityPageRoutingModule } from './initial-availability-routing.module';

import { InitialAvailabilityPage } from './initial-availability.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InitialAvailabilityPageRoutingModule
  ],
  declarations: [InitialAvailabilityPage]
})
export class InitialAvailabilityPageModule {}
