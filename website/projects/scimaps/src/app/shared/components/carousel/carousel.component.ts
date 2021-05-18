import { AfterViewInit, Component, ContentChildren, HostBinding, QueryList, ViewChild } from '@angular/core';
import { SwiperDirective } from 'ngx-swiper-wrapper';
import { SwiperOptions } from 'swiper';

import { CarouselItemComponent } from './item.component';


/**
 * Carousel component for displaying images
 */
@Component({
  selector: 'sci-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
  /** HTML class */
  @HostBinding('class') readonly clsName = 'sci-carousel';

  /**
   * Reference to the swiper directive
   */
  @ViewChild(SwiperDirective)
  readonly swiper!: SwiperDirective;

  /**
   * References to slides
   */
  @ContentChildren(CarouselItemComponent)
  readonly slides!: QueryList<CarouselItemComponent>;

  /**
   * Carousel options
   */
  public config: SwiperOptions = {
    a11y: { enabled: true },

    keyboard: false,
    mousewheel: false,
    simulateTouch: false,

    navigation: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      hideOnClick: false
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    }
  };

  /**
   * Initializes listener on slides changes and notifies swiper
   */
  ngAfterViewInit(): void {
    this.slides.changes.subscribe(() => this.swiper.update());
  }
}
