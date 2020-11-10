import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGalleryComponent } from './card-gallery.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [CardGalleryComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [CardGalleryComponent]
})
export class CardGalleryModule { }
