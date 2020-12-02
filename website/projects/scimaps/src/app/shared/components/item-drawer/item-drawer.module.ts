import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { ItemDrawerComponent } from './item-drawer.component';
import { PurchaseModalModule } from '../purchase-modal/purchase-modal.module';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    PurchaseModalModule
  ],
  declarations: [ItemDrawerComponent],
  exports: [ItemDrawerComponent]
})
export class ItemDrawerModule { }
