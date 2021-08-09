import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostingRoutingModule } from './hosting-routing.module';
import { HostingComponent } from './hosting.component';
import { CardLinkModule } from '../../shared/components/card-link/card-link.module';
import { MarkdownModule } from 'ngx-markdown';
import { CarouselModule } from '../../shared/components/carousel/carousel.module';
import { SharedModule } from '../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { DrawerModule } from '../../shared/components/drawer/drawer.module';
import { TabHeaderModule } from '../../shared/components/tab-header/tab-header.module';
import { MatCardModule } from '@angular/material/card';
import { LearningMaterialsListModule } from '../../shared/components/learning-material-list/learning-materials-list.module';
import { DrawerHeaderModule } from '../../shared/components/drawer-header/drawer-header.module';


@NgModule({
  declarations: [HostingComponent],
  imports: [
    CommonModule,
    HostingRoutingModule,
    CardLinkModule,
    CarouselModule,
    MarkdownModule,
    MatIconModule,
    DrawerModule,
    TabHeaderModule,
    MatCardModule,
    SharedModule,
    LearningMaterialsListModule,
    DrawerHeaderModule
  ]
})
export class HostingModule { }
