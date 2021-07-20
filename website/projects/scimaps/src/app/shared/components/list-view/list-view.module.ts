import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view.component';
import { VenueItemModule } from '../venue-item/venue-item.module';
import { NewsItemModule } from '../news-item/news-item.module';



@NgModule({
  declarations: [ListViewComponent],
  imports: [
    CommonModule,
    VenueItemModule,
    NewsItemModule
  ],
  exports: [ListViewComponent]
})
export class ListViewModule { }
