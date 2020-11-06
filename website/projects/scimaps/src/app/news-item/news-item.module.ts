import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperModule } from 'ngx-swiper-wrapper';

import { NewsItemComponent } from './news-item.component';


@NgModule({
  declarations: [NewsItemComponent],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: [
    NewsItemComponent
  ]
})
export class NewsItemModule { }
