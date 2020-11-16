import { Shallow } from 'shallow-render';

import { CarouselModule } from './carousel.module';
import { CarouselItemComponent } from './item.component';


describe('CarouselItemComponent', () => {
  let shallow: Shallow<CarouselItemComponent>;

  beforeEach(() => {
    shallow = new Shallow(CarouselItemComponent, CarouselModule);
  });

  it('projects content', async () => {
    const { element } = await shallow.render('<sci-carousel-item>Foo</sci-carousel-item>');
    const el = element.nativeElement as Element;
    expect(el.innerHTML).toContain('Foo');
  });
});
