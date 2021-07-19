import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryItemComponent } from './gallery-item.component';



@NgModule({
  declarations: [GalleryItemComponent],
  imports: [
    CommonModule
  ],
  exports: [GalleryItemComponent]
})
export class GalleryItemModule { }
