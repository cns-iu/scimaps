import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoTileComponent } from './video-tile.component';



@NgModule({
  declarations: [VideoTileComponent],
  imports: [
    CommonModule
  ],
  exports: [VideoTileComponent]
})
export class VideoTileModule { }
