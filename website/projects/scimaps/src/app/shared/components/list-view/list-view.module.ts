import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view.component';
import { VenueItemModule } from '../venue-item/venue-item.module';



@NgModule({
  declarations: [ListViewComponent],
  imports: [
    CommonModule,
    VenueItemModule
  ],
  exports: [ListViewComponent]
})
export class ListViewModule { }
