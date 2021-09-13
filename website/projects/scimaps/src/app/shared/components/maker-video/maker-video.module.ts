import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { SafePipeModule } from '../../../pipes/safe.pipe';
import { DrawerHeaderModule } from '../drawer-header/drawer-header.module';
import { DrawerModule } from '../drawer/drawer.module';
import { MakerVideoComponent } from './maker-video.component';



@NgModule({
  declarations: [MakerVideoComponent],
  imports: [
    CommonModule,
    DrawerModule,
    DrawerHeaderModule,
    MarkdownModule,
    SafePipeModule
  ],
  exports: [
    MakerVideoComponent
  ]
})
export class MakerVideoModule { }
