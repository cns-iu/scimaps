import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MacroscopesPageRoutingModule } from './macroscopes-page-routing.module';
import { MacroscopesPageComponent } from './macroscopes-page.component';
import { DiscoverListingModule } from '../../shared/components/discover-listing/discover-listing.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [MacroscopesPageComponent],
  imports: [
    CommonModule,
    MacroscopesPageRoutingModule,
    DiscoverListingModule,
    MatIconModule
  ]
})
export class MacroscopesPageModule { }
