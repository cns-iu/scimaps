import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { ItemDrawerComponent } from './item-drawer.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
  ],
  declarations: [ItemDrawerComponent],
  exports: [ItemDrawerComponent]
})
export class ItemDrawerModule { }
