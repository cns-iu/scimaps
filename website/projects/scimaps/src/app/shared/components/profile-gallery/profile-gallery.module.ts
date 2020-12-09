import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileGalleryComponent } from './profile-gallery.component';



@NgModule({
  declarations: [ProfileGalleryComponent],
  imports: [
    CommonModule
  ],
  exports: [ProfileGalleryComponent]
})
export class ProfileGalleryModule { }
