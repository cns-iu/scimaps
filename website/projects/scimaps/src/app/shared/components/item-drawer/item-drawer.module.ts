import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ItemDrawerComponent } from './item-drawer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ItemDrawerComponent],
  exports: [ItemDrawerComponent]
})
export class ItemDrawerModule { }
