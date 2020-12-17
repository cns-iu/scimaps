import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MapsComponent } from './maps.component';
import { DiscoverListingModule } from '../../shared/components/discover-listing/discover-listing.module';
import { ItemDrawerModule } from '../../shared/components/item-drawer/item-drawer.module';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from '../../shared/components/carousel/carousel.module';


@NgModule({
  declarations: [MapsComponent],
  imports: [
    CommonModule,
    MapsRoutingModule,
    DiscoverListingModule,
    MatIconModule,
    CarouselModule,
    ItemDrawerModule
  ]
})
export class MapsModule { }
