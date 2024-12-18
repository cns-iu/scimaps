import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AccordianModule } from '../../shared/components/accordian/accordian.module';
import { ListViewModule } from '../../shared/components/list-view/list-view.module';
import { SearchOverlayModule } from '../../shared/components/search-overlay/search-overlay.module';
import { SelectModule } from '../../shared/components/select/select.module';
import { TableModule } from '../../shared/components/table/table.module';
import { VenuesTableModule } from '../../shared/components/venues-table/venues-table.module';
import { SharedModule } from '../../shared/shared.module';
import { VenuesRoutingModule } from './venues-routing.module';
import { VenuesComponent } from './venues.component';
import { VenueGalleryModule } from '../../shared/components/venue-gallery/venue-gallery.module';


@NgModule({
  declarations: [VenuesComponent],
  imports: [
    CommonModule,
    VenuesRoutingModule,
    MatIconModule,
    AccordianModule,
    TableModule,
    SharedModule,
    SelectModule,
    SearchOverlayModule,
    ListViewModule,
    VenuesTableModule,
    VenueGalleryModule
  ],
  providers: []
})
export class VenuesModule { }
