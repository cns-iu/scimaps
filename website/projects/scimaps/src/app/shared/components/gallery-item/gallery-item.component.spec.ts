import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Venue } from '../../../pages/venues/venues-resolver.service';

import { GalleryItemComponent } from './gallery-item.component';
import { GalleryItemModule } from './gallery-item.module';

export const getVenues = (n: number) => {
  const result: Venue[] = [];
  for (let i = 0; i < n; i ++) {
    result.push({
      dateStart: `2012-02-0${i}`,
      dateEnd: '',
      title: `Title ${i}`,
      venue: `Venue ${i}`,
      city: `City ${i}`,
      pdfLink: `pdfLink ${i}`,
      organizer: `organizer ${i}`,
      credit: `credit ${i}`,
      state: `State ${i}`,
      country: `country ${i}`,
      venueImages: [{
        sm: `image${i}.sm.jpg`,
        lg: `image${i}.lg.jpg`
      }]
    });
  }
  return result;
};
describe('GalleryItemComponent', () => {
  let component: GalleryItemComponent;
  let fixture: ComponentFixture<GalleryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryItemComponent ],
      imports: [GalleryItemModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryItemComponent);
    component = fixture.componentInstance;
    const venue = getVenues(1)[0];
    component.item = venue;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit event on close', () => {
    const spy = spyOn(component.closed, 'emit');
    component.closeDrawer();
    expect(spy).toHaveBeenCalled();
  });
});
