import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakerVideosRoutingModule } from './maker-videos-routing.module';
import { MakerVideosComponent } from './maker-videos.component';
import { MarkdownModule } from 'ngx-markdown';
import { DrawerHeaderModule } from '../../shared/components/drawer-header/drawer-header.module';
import { DrawerModule } from '../../shared/components/drawer/drawer.module';
import { SafePipe } from '../../pipes/safe.pipe';
import { MakerVideoModule } from '../../shared/components/maker-video/maker-video.module';


@NgModule({
  declarations: [MakerVideosComponent],
  imports: [
    CommonModule,
    MakerVideosRoutingModule,
    MarkdownModule,
    DrawerHeaderModule,
    DrawerModule,
    MakerVideoModule
  ]
})
export class MakerVideosModule { }
