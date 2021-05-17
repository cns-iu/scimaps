import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileGalleryComponent } from './profile-gallery.component';
import { MarkdownModule } from 'ngx-markdown';



@NgModule({
  declarations: [ProfileGalleryComponent],
  imports: [
    CommonModule,
    MarkdownModule
  ],
  exports: [ProfileGalleryComponent]
})
export class ProfileGalleryModule { }
