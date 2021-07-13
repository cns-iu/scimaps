import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { VenuesRoutingModule } from './venues-routing.module';
import { VenuesComponent } from './venues.component';

import { LazyTableModule } from '../../shared/components/lazy-table/lazy-table.module';
import { MatIconModule } from '@angular/material/icon';
import { AccordianModule } from '../../shared/components/accordian/accordian.module';
import { VenuesTableModule } from '../../shared/components/venues-table/venues-table.module';
import { FilterBarModule } from '../../shared/components/filter-bar/filter-bar.module';
import { VenuesListModule } from '../../shared/components/venues-list/venues-list.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [VenuesComponent],
  imports: [
    CommonModule,
    VenuesRoutingModule,
    // LazyCardsModule,
    // LazyTableModule,
    MatIconModule,
    LazyTableModule,
    AccordianModule,
    VenuesTableModule,
    FilterBarModule,
    VenuesListModule,
    SharedModule
  ],
  providers: [DatePipe]
})
export class VenuesModule { }
