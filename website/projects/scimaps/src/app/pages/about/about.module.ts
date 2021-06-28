import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { ProfileGalleryModule } from '../../shared/components/profile-gallery/profile-gallery.module';
import { TabHeaderModule } from '../../shared/components/tab-header/tab-header.module';
import { NewsItemListModule } from '../../shared/components/news-item-list/news-item-list.module';
import { SharedModule } from '../../shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { MarkdownModule } from 'ngx-markdown';
import { PartnersModule } from '../../shared/components/partners/partners.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    ProfileGalleryModule,
    TabHeaderModule,
    NewsItemListModule,
    MatSelectModule,
    SharedModule,
    MarkdownModule,
    PartnersModule
  ]
})
export class AboutModule { }
