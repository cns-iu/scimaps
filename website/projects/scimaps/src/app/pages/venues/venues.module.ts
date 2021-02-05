import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VenuesRoutingModule } from './venues-routing.module';
import { VenuesComponent } from './venues.component';

import { LazyCardsModule } from '../../shared/components/lazy-cards/lazy-cards.module';
import { LazyTableModule } from '../../shared/components/lazy-table/lazy-table.module';


@NgModule({
  declarations: [VenuesComponent],
  imports: [
    CommonModule,
    VenuesRoutingModule,
    LazyCardsModule,
    LazyTableModule
  ]
})
export class VenuesModule { }
