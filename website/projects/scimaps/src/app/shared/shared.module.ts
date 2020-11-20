import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardGalleryModule } from './components/card-gallery/card-gallery.module';
import { CarouselModule } from './components/carousel/carousel.module';
import { NewsItemModule } from './components/news-item/news-item.module';


@NgModule({
  imports: [
    CommonModule,

    CardGalleryModule,
    CarouselModule,
    NewsItemModule
  ],
  exports: [
    CardGalleryModule,
    CarouselModule,
    NewsItemModule
  ]
})
export class SharedModule { }
