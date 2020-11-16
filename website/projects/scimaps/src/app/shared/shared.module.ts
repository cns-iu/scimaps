import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarouselModule } from './components/carousel/carousel.module';
import { NewsItemModule } from './components/news-item/news-item.module';


@NgModule({
  imports: [
    CommonModule,

    CarouselModule,
    NewsItemModule
  ],
  exports: [
    CarouselModule,
    NewsItemModule
  ]
})
export class SharedModule { }
