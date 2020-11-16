import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'sci-carousel-item',
  template: '<ng-content></ng-content>',
  styles: [':host { display: block; overflow: hidden; }'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselItemComponent {
  @HostBinding('class') readonly classes = ['sci-carousel-item', 'swiper-slide'];
}
