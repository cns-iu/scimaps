import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenuesListComponent } from './venues-list.component';
import { VenueItemModule } from '../venue-item/venue-item.module';




@NgModule({
  declarations: [VenuesListComponent],
  imports: [
    CommonModule,
    VenueItemModule
  ],
  exports: [VenuesListComponent]
})
export class VenuesListModule { }
