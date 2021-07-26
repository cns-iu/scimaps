import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { VenuesRoutingModule } from './venues-routing.module';
import { VenuesComponent } from './venues.component';
import { MatIconModule } from '@angular/material/icon';
import { AccordianModule } from '../../shared/components/accordian/accordian.module';
import { TableModule } from '../../shared/components/table/table.module';
import { SharedModule } from '../../shared/shared.module';
import { SelectModule } from '../../shared/components/select/select.module';
import { SearchOverlayModule } from '../../shared/components/search-overlay/search-overlay.module';
import { ListViewModule } from '../../shared/components/list-view/list-view.module';

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
    ListViewModule
  ],
  providers: []
})
export class VenuesModule { }
