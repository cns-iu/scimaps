import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MacroscopeRoutingModule } from './macroscope-routing.module';
import { MacroscopeComponent } from './macroscope.component';
import { ItemDrawerModule } from '../../shared/components/item-drawer/item-drawer.module';

@NgModule({
  declarations: [MacroscopeComponent],
  imports: [
    CommonModule,
    MacroscopeRoutingModule,
    ItemDrawerModule
  ]
})
export class MacroscopeModule { }
