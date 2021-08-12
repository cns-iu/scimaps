import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownModule } from 'ngx-markdown';
import { ListViewModule } from '../../shared/components/list-view/list-view.module';
import { PartnersModule } from '../../shared/components/partners/partners.module';
import { ProfileGalleryModule } from '../../shared/components/profile-gallery/profile-gallery.module';
import { SearchOverlayModule } from '../../shared/components/search-overlay/search-overlay.module';
import { SelectModule } from '../../shared/components/select/select.module';
import { TableModule } from '../../shared/components/table/table.module';
import { SharedModule } from '../../shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    ProfileGalleryModule,
    MatSelectModule,
    SharedModule,
    PartnersModule,
    SelectModule,
    SearchOverlayModule,
    ListViewModule,
    TableModule,
    MarkdownModule,
    MatTabsModule
  ]
})
export class AboutModule { }
