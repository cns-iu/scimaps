import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { ItemDrawerModule } from '../../shared/components/item-drawer/item-drawer.module';
import { TileModule } from '../../shared/components/tile/tile.module';

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    MapRoutingModule,
    ItemDrawerModule,
    TileModule
  ]
})
export class MapModule { }
