import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from '../../shared.module';
import { DrawerHeaderModule } from '../drawer-header/drawer-header.module';
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
    SharedModule,
    DrawerModule,
    DrawerHeaderModule,
    MakersSubdrawerModule,
    RouterModule
  ],
  declarations: [ItemDrawerComponent],
  exports: [ItemDrawerComponent]
})
export class ItemDrawerModule { }
