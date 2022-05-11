import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwiperDirective } from 'ngx-swiper-wrapper';
import { Shallow } from 'shallow-render';
import { CarouselComponent } from './carousel.component';
import { CarouselModule } from './carousel.module';



describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
  });

  it('can create component', () => {
    expect(component).toBeTruthy();
  });
});
