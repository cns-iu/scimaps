import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { VenuesRoutingModule } from './venues-routing.module';
import { VenuesComponent } from './venues.component';

import { LazyCardsModule } from '../../shared/components/lazy-cards/lazy-cards.module';
import { LazyTableModule } from '../../shared/components/lazy-table/lazy-table.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AccordianModule } from '../../shared/components/accordian/accordian.module';

@NgModule({
  declarations: [VenuesComponent],
  imports: [
    CommonModule,
    VenuesRoutingModule,
    // LazyCardsModule,
    // LazyTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    LazyTableModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule,
    MatIconModule,
    AccordianModule
  ],
  providers: [DatePipe]
})
export class VenuesModule { }
