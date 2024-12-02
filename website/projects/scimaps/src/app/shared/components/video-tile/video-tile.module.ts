import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VideoTileComponent } from './video-tile.component';
import { MarkdownModule } from 'ngx-markdown';



@NgModule({
  declarations: [VideoTileComponent],
  imports: [
    CommonModule,
    MarkdownModule
  ],
  exports: [VideoTileComponent]
})
export class VideoTileModule { }
