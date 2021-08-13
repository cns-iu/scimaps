import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakerVideosRoutingModule } from './maker-videos-routing.module';
import { MakerVideosComponent } from './maker-videos.component';


@NgModule({
  declarations: [MakerVideosComponent],
  imports: [
    CommonModule,
    MakerVideosRoutingModule
  ]
})
export class MakerVideosModule { }
