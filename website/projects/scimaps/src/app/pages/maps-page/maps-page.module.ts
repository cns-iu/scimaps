import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsPageRoutingModule } from './maps-page-routing.module';
import { MapsPageComponent } from './maps-page.component';
import { DiscoverListingModule } from '../../shared/components/discover-listing/discover-listing.module';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from '../../shared/components/carousel/carousel.module';


@NgModule({
  declarations: [MapsPageComponent],
  imports: [
    CommonModule,
    MapsPageRoutingModule,
    DiscoverListingModule,
    MatIconModule,
    CarouselModule
  ]
})
export class MapsPageModule { }
