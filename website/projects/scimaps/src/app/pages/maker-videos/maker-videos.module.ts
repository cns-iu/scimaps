import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { DrawerHeaderModule } from '../../shared/components/drawer-header/drawer-header.module';
import { DrawerModule } from '../../shared/components/drawer/drawer.module';
import { MakerVideoModule } from '../../shared/components/maker-video/maker-video.module';
import { VideoTileModule } from '../../shared/components/video-tile/video-tile.module';
import { MakerVideosRoutingModule } from './maker-videos-routing.module';
import { MakerVideosComponent } from './maker-videos.component';



@NgModule({
  declarations: [MakerVideosComponent],
  imports: [
    CommonModule,
    MakerVideosRoutingModule,
    MarkdownModule,
    DrawerHeaderModule,
    DrawerModule,
    MakerVideoModule,
    VideoTileModule
  ]
})
export class MakerVideosModule { }
