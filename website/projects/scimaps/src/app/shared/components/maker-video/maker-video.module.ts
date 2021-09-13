import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakerVideoComponent } from './maker-video.component';
import { DrawerModule } from '../drawer/drawer.module';
import { DrawerHeaderModule } from '../drawer-header/drawer-header.module';
import { SafePipe, SafePipeModule } from '../../../pipes/safe.pipe';
import { MarkdownModule } from 'ngx-markdown';



@NgModule({
  declarations: [MakerVideoComponent],
  imports: [
    CommonModule,
    DrawerModule
  ],
  exports: [
    MakerVideoComponent
  ]
})
export class MakerVideoModule { }
