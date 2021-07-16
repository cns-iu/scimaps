import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { ItemDrawerComponent } from './item-drawer.component';
import { PurchaseModalModule } from '../purchase-modal/purchase-modal.module';
import { MakersSubdrawerModule } from '../makers-subdrawer/makers-subdrawer.module';
import { DrawerModule } from '../drawer/drawer.module';
@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    PurchaseModalModule,
    MarkdownModule,
    MakersSubdrawerModule,
    DrawerModule
  ],
  declarations: [ItemDrawerComponent],
  exports: [ItemDrawerComponent]
})
export class ItemDrawerModule { }
