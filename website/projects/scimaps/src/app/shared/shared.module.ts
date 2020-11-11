import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarouselModule } from './components/carousel/carousel.module';


@NgModule({
  imports: [
    CommonModule,

    CarouselModule
  ],
  exports: [
    CarouselModule
  ]
})
export class SharedModule { }
