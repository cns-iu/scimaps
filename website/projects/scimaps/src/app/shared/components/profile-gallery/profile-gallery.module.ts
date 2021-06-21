import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileGalleryComponent } from './profile-gallery.component';
import { MarkdownModule } from 'ngx-markdown';
import { ProfileItemModule } from '../profile-item/profile-item.module';



@NgModule({
  declarations: [ProfileGalleryComponent],
  imports: [
    CommonModule,
    MarkdownModule,
    ProfileItemModule
  ],
  exports: [ProfileGalleryComponent]
})
export class ProfileGalleryModule { }
