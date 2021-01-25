import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { MacroscopesRoutingModule } from './macroscopes-routing.module';
import { MacroscopesComponent } from './macroscopes.component';
import { DiscoverListingModule } from '../../shared/components/discover-listing/discover-listing.module';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from '../../shared/components/carousel/carousel.module';


@NgModule({
  declarations: [MacroscopesComponent],
  imports: [
    CommonModule,
    MacroscopesRoutingModule,
    DiscoverListingModule,
    MatIconModule,
    MarkdownModule,
    CarouselModule
  ]
})
export class MacroscopesModule { }
