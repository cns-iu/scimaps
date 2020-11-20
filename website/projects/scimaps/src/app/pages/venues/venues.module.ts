import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VenuesRoutingModule } from './venues-routing.module';
import { VenuesComponent } from './venues.component';


@NgModule({
  declarations: [VenuesComponent],
  imports: [
    CommonModule,
    VenuesRoutingModule
  ]
})
export class VenuesModule { }
