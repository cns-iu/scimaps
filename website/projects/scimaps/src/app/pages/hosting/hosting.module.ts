import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostingRoutingModule } from './hosting-routing.module';
import { HostingComponent } from './hosting.component';
import { CardLinkModule } from '../../shared/components/card-link/card-link.module';


@NgModule({
  declarations: [HostingComponent],
  imports: [
    CommonModule,
    HostingRoutingModule,
    CardLinkModule
  ]
})
export class HostingModule { }
