import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownModule } from 'ngx-markdown';
import { SafePipeModule } from '../../pipes/safe.pipe';
import { BlogTileModule } from '../../shared/components/blog-tile/blog-tile.module';
import { DrawerHeaderModule } from '../../shared/components/drawer-header/drawer-header.module';
import { DrawerModule } from '../../shared/components/drawer/drawer.module';
import { VideoTileModule } from '../../shared/components/video-tile/video-tile.module';
import { SharedModule } from '../../shared/shared.module';
import { LearningCenterRoutingModule } from './learning-center-routing.module';
import { LearningCenterComponent } from './learning-center.component';


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
