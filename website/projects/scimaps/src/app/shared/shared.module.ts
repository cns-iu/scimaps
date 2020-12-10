import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardGalleryModule } from './components/card-gallery/card-gallery.module';
import { CarouselModule } from './components/carousel/carousel.module';
import { MenuIconModule } from './components/menu-icon/menu-icon.module';
import { NewsItemListModule } from './components/news-item-list/news-item-list.module';
import { NewsItemModule } from './components/news-item/news-item.module';
import { BreakpointDirective } from './directives/breakpoint.directive';


@NgModule({
  imports: [
    CommonModule,

    CardGalleryModule,
    CarouselModule,
    MenuIconModule,
    NewsItemModule,
    NewsItemListModule
  ],
  declarations: [
    BreakpointDirective
  ],
  exports: [
    CardGalleryModule,
    CarouselModule,
    MenuIconModule,
    NewsItemModule,
    NewsItemListModule,

    BreakpointDirective
  ]
})
export class SharedModule { }
