import { Component } from '@angular/core';

import { SwiperOptions } from 'swiper';

@Component({
  selector: 'sci-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})


export class CarouselComponent {
  public show = true;

  public slides = [
    '../../assets/images/benches.jpg',
    '../../assets/images/bridge.jpg',
    '../../assets/images/flower.jpg',
    '../../assets/images/garden.jpg',
  ];

  public type = 'component';

  public disabled = false;

  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    simulateTouch: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  };

  constructor() {}
}


