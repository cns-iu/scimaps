import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardGalleryModule } from './components/card-gallery/card-gallery.module';
import { CarouselModule } from './components/carousel/carousel.module';
import { NewsItemModule } from './components/news-item/news-item.module';
import { NewsItemListModule } from './components/news-item-list/news-item-list.module';


@NgModule({
  imports: [
    CommonModule,

    CardGalleryModule,
    CarouselModule,
    NewsItemModule,
    NewsItemListModule
  ],
  exports: [
    CardGalleryModule,
    CarouselModule,
    NewsItemModule,
    NewsItemListModule
  ]
})
export class SharedModule { }
