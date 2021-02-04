import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { ItemDrawerComponent } from './item-drawer.component';
import { PurchaseModalModule } from '../purchase-modal/purchase-modal.module';
import { MakersSubdrawerModule } from '../makers-subdrawer/makers-subdrawer.module';
import { MapsComponent } from '../../../pages/maps/maps.component';
import { MacroscopesComponent } from '../../../pages/macroscopes/macroscopes.component';

const routes: Routes = [
  { path: 'maps', component: MapsComponent},
  { path: 'macroscopes', component: MacroscopesComponent}
]

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    PurchaseModalModule,
    MarkdownModule,
    MakersSubdrawerModule,
    RouterModule.forChild(
      routes
    )
  ],
  declarations: [ItemDrawerComponent],
  exports: [ItemDrawerComponent]
})
export class ItemDrawerModule { }
