import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownModule } from 'ngx-markdown';
import { DrawerModule } from '../drawer/drawer.module';
import { MakersSubdrawerModule } from '../makers-subdrawer/makers-subdrawer.module';
import { PurchaseModalModule } from '../purchase-modal/purchase-modal.module';
import { ItemDrawerComponent } from './item-drawer.component';

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
