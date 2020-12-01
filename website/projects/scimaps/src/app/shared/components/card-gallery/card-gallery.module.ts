import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGalleryComponent } from './card-gallery.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [CardGalleryComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [CardGalleryComponent]
})
export class CardGalleryModule { }
