import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'ngx-swiper-wrapper';

import { CarouselComponent } from './carousel.component';


@NgModule({
  imports: [
    CommonModule,

    SwiperModule
  ],
  declarations: [CarouselComponent],
  exports: [CarouselComponent]
})
export class CarouselModule { }
