import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryItemComponent } from './gallery-item.component';
import { DrawerModule } from '../drawer/drawer.module';



@NgModule({
  declarations: [GalleryItemComponent],
  imports: [
    CommonModule,
    DrawerModule
  ],
  exports: [GalleryItemComponent]
})
export class GalleryItemModule { }
