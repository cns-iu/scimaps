import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmissionsRoutingModule } from './submissions-routing.module';
import { SubmissionsComponent } from './submissions.component';
import { DiscoverListingModule } from '../../shared/components/discover-listing/discover-listing.module';

@NgModule({
  declarations: [SubmissionsComponent],
  imports: [
    CommonModule,
    SubmissionsRoutingModule,
    DiscoverListingModule
  ]
})
export class SubmissionsModule { }
