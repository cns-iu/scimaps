import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakerVideosRoutingModule } from './maker-videos-routing.module';
import { MakerVideosComponent } from './maker-videos.component';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [MakerVideosComponent],
  imports: [
    CommonModule,
    MakerVideosRoutingModule,
    MarkdownModule
  ]
})
export class MakerVideosModule { }
