import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarouselModule } from './components/carousel/carousel.module';
import { NewsItemModule } from './components/news-item/news-item.module';
import { NewsItemListModule } from './components/news-item-list/news-item-list.module';


@NgModule({
  imports: [
    CommonModule,

    CarouselModule,
    NewsItemModule,
    NewsItemListModule
  ],
  exports: [
    CarouselModule,
    NewsItemModule,
    NewsItemListModule
  ]
})
export class SharedModule { }
