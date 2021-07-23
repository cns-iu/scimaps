import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { ProfileGalleryModule } from '../../shared/components/profile-gallery/profile-gallery.module';
import { TabHeaderModule } from '../../shared/components/tab-header/tab-header.module';
import { SharedModule } from '../../shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { MarkdownModule } from 'ngx-markdown';
import { PartnersModule } from '../../shared/components/partners/partners.module';
import { SelectModule } from '../../shared/components/select/select.module';
import { SearchOverlayModule } from '../../shared/components/search-overlay/search-overlay.module';
import { ListViewModule } from '../../shared/components/list-view/list-view.module';
import { TableModule } from '../../shared/components/table/table.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    ProfileGalleryModule,
    TabHeaderModule,
    MatSelectModule,
    SharedModule,
    PartnersModule,
    SelectModule,
    SearchOverlayModule,
    ListViewModule,
    TableModule,
    MarkdownModule
  ]
})
export class AboutModule { }
