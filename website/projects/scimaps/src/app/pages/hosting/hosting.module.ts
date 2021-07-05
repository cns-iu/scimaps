import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostingRoutingModule } from './hosting-routing.module';
import { HostingComponent } from './hosting.component';
import { CardLinkModule } from '../../shared/components/card-link/card-link.module';
import { MarkdownModule } from 'ngx-markdown';
import { CarouselModule } from '../../shared/components/carousel/carousel.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [HostingComponent],
  imports: [
    CommonModule,
    HostingRoutingModule,
    CardLinkModule,
    CarouselModule,
    MarkdownModule,
    SharedModule
  ]
})
export class HostingModule { }
