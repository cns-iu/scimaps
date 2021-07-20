import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriesComponent } from './galleries.component';
import { GalleryItemModule } from '../gallery-item/gallery-item.module';



@NgModule({
  declarations: [GalleriesComponent],
  imports: [
    CommonModule,
    GalleryItemModule
  ],
  exports: [GalleriesComponent]
})
export class GalleriesModule { }
