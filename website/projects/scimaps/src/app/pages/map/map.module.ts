import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { ItemDrawerModule } from '../../shared/components/item-drawer/item-drawer.module';

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    MapRoutingModule,
    ItemDrawerModule
  ]
})
export class MapModule { }
