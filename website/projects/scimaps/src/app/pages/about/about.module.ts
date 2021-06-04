import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { ProfileGalleryModule } from '../../shared/components/profile-gallery/profile-gallery.module';
import { TabHeaderModule } from '../../shared/components/tab-header/tab-header.module';
import { NewsItemListModule } from '../../shared/components/news-item-list/news-item-list.module';
import { DataTableModule } from '../../shared/components/data-table/data-table.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    ProfileGalleryModule,
    TabHeaderModule,
    NewsItemListModule,
    DataTableModule,
    SharedModule
  ]
})
export class AboutModule { }
