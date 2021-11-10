import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningCenterRoutingModule } from './learning-center-routing.module';
import { LearningCenterComponent } from './learning-center.component';
import { MarkdownModule } from 'ngx-markdown';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../shared/shared.module';
import { DrawerModule } from '../../shared/components/drawer/drawer.module';
import { DrawerHeaderModule } from '../../shared/components/drawer-header/drawer-header.module';
import { BlogTileModule } from '../../shared/components/blog-tile/blog-tile.module';
import { VideoTileModule } from '../../shared/components/video-tile/video-tile.module';
import { SafePipeModule } from '../../pipes/safe.pipe';

@NgModule({
  declarations: [LearningCenterComponent],
  imports: [
    CommonModule,
    LearningCenterRoutingModule,
    MarkdownModule,
    MatCardModule,
    MatIconModule,
    SharedModule,
    DrawerModule,
    DrawerHeaderModule,
    BlogTileModule,
    VideoTileModule,
    SafePipeModule
  ]
})
export class LearningCenterModule { }
