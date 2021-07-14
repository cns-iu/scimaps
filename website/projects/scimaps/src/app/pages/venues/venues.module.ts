import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { VenuesRoutingModule } from './venues-routing.module';
import { VenuesComponent } from './venues.component';
import { MatIconModule } from '@angular/material/icon';
import { AccordianModule } from '../../shared/components/accordian/accordian.module';
import { VenuesTableModule } from '../../shared/components/venues-table/venues-table.module';
import { VenuesListModule } from '../../shared/components/venues-list/venues-list.module';
import { SharedModule } from '../../shared/shared.module';
import { SortHeadersModule } from '../../shared/components/sort-headers/sort-headers.module';
import { SelectModule } from '../../shared/components/select/select.module';
import { SearchOverlayModule } from '../../shared/components/search-overlay/search-overlay.module';

@NgModule({
  declarations: [VenuesComponent],
  imports: [
    CommonModule,
    VenuesRoutingModule,
    MatIconModule,
    AccordianModule,
    VenuesTableModule,
    VenuesListModule,
    SortHeadersModule,
    SharedModule,
    SelectModule,
    SearchOverlayModule
  ],
  providers: [DatePipe]
})
export class VenuesModule { }
