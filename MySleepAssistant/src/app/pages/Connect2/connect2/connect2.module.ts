import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Connect2PageRoutingModule } from './connect2-routing.module';

import { Connect2Page } from './connect2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Connect2PageRoutingModule
  ],
  declarations: [Connect2Page]
})
export class Connect2PageModule {}
