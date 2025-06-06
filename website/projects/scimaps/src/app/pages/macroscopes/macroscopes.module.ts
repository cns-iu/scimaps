import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { MacroscopesRoutingModule } from './macroscopes-routing.module';
import { MacroscopesComponent } from './macroscopes.component';
import { DiscoverListingModule } from '../../shared/components/discover-listing/discover-listing.module';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from '../../shared/components/carousel/carousel.module';
import { SharedModule } from '../../shared/shared.module';
import { DrawerModule } from '../../shared/components/drawer/drawer.module';
import { DrawerHeaderModule } from '../../shared/components/drawer-header/drawer-header.module';


@NgModule({
  declarations: [MacroscopesComponent],
  imports: [
    CommonModule,
    MacroscopesRoutingModule,
    DiscoverListingModule,
    MatIconModule,
    MarkdownModule,
    CarouselModule,
    SharedModule,
    DrawerModule,
    DrawerHeaderModule
  ]
})
export class MacroscopesModule { }
