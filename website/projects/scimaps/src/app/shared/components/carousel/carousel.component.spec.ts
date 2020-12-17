import { SwiperDirective } from 'ngx-swiper-wrapper';
import { Shallow } from 'shallow-render';
import { CarouselComponent } from './carousel.component';
import { CarouselModule } from './carousel.module';


describe('CarouselComponent', () => {
  let shallow: Shallow<CarouselComponent>;

  beforeEach(() => {
    shallow = new Shallow(CarouselComponent, CarouselModule)
      .mock(SwiperDirective, { update: () => undefined });
  });

  it('updates swiper when the slides changes', async () => {
    const { instance } = await shallow.render();
    instance.slides.notifyOnChanges();
    expect(instance.swiper.update).toHaveBeenCalled();
  });
});
