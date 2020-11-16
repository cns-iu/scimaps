import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'ngx-swiper-wrapper';

import { CarouselComponent } from './carousel.component';
import { CarouselItemComponent } from './item.component';


@NgModule({
  imports: [CommonModule, SwiperModule],
  declarations: [CarouselComponent, CarouselItemComponent],
  exports: [CarouselComponent, CarouselItemComponent]
})
export class CarouselModule { }
