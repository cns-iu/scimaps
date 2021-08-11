import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownModule } from 'ngx-markdown';
import { CardLinkModule } from '../../shared/components/card-link/card-link.module';
import { CarouselModule } from '../../shared/components/carousel/carousel.module';
import { DrawerHeaderModule } from '../../shared/components/drawer-header/drawer-header.module';
import { DrawerModule } from '../../shared/components/drawer/drawer.module';
import { LearningMaterialsListModule } from '../../shared/components/learning-material-list/learning-materials-list.module';
import { SharedModule } from '../../shared/shared.module';
import { HostingRoutingModule } from './hosting-routing.module';
import { HostingComponent } from './hosting.component';



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
    MatCardModule,
    SharedModule,
    LearningMaterialsListModule,
    DrawerHeaderModule,
    MatTabsModule
  ]
})
export class HostingModule { }
