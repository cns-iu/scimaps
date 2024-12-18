import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { MapsRoutingModule } from './maps-routing.module';
import { MapsComponent } from './maps.component';
import { DiscoverListingModule } from '../../shared/components/discover-listing/discover-listing.module';
import { ItemDrawerModule } from '../../shared/components/item-drawer/item-drawer.module';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from '../../shared/components/carousel/carousel.module';
import { DrawerModule } from '../../shared/components/drawer/drawer.module';
import { SharedModule } from '../../shared/shared.module';
import { DrawerHeaderModule } from '../../shared/components/drawer-header/drawer-header.module';
import { TileModule } from '../../shared/components/tile/tile.module';


@NgModule({
  declarations: [MapsComponent],
  imports: [
    CommonModule,
    MapsRoutingModule,
    DiscoverListingModule,
    MarkdownModule,
    MatIconModule,
    CarouselModule,
    ItemDrawerModule,
    DrawerModule,
    SharedModule,
    DrawerHeaderModule,
    TileModule
  ]
})
export class MapsModule { }
