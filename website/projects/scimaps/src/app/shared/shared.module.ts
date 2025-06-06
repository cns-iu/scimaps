import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardGalleryModule } from './components/card-gallery/card-gallery.module';
import { CarouselModule } from './components/carousel/carousel.module';
import { MenuIconModule } from './components/menu-icon/menu-icon.module';
import { BreakpointDirective } from './directives/breakpoint.directive';



@NgModule({
  imports: [
    CommonModule,
    CardGalleryModule,
    CarouselModule,
    MenuIconModule,
  ],
  declarations: [
    BreakpointDirective
  ],
  exports: [
    CardGalleryModule,
    CarouselModule,
    MenuIconModule,
    BreakpointDirective
  ]
})
export class SharedModule { }
