import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MakersSubdrawerComponent } from './makers-subdrawer.component';
import { PurchaseModalModule } from '../purchase-modal/purchase-modal.module';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    PurchaseModalModule
  ],
  declarations: [MakersSubdrawerComponent],
  exports: [MakersSubdrawerComponent]
})
export class MakersSubdrawerModule { }
