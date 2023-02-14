import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeAvailabilityPageRoutingModule } from './change-availability-routing.module';

import { ChangeAvailabilityPage } from './change-availability.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeAvailabilityPageRoutingModule
  ],
  declarations: [ChangeAvailabilityPage]
})
export class ChangeAvailabilityPageModule {}
