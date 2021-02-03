import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { MatIconModule } from '@angular/material/icon';
import { ItemDrawerComponent } from './item-drawer.component';
import { PurchaseModalModule } from '../purchase-modal/purchase-modal.module';
import { MakersSubdrawerModule } from '../makers-subdrawer/makers-subdrawer.module';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    PurchaseModalModule,
    MarkdownModule,
    MakersSubdrawerModule
  ],
  declarations: [ItemDrawerComponent],
  exports: [ItemDrawerComponent]
})
export class ItemDrawerModule { }
