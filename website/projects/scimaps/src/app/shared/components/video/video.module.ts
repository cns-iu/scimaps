import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';
import { SafePipeModule } from '../../../pipes/safe.pipe';



@NgModule({
  declarations: [VideoComponent],
  imports: [
    CommonModule,
    SafePipeModule
  ],
  exports: [VideoComponent]
})
export class VideoModule { }
