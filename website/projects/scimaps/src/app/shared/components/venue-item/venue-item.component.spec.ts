import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { Venue } from '../../../pages/venues/venues-resolver.service';

import { VenueItemComponent } from './venue-item.component';
import { VenueItemModule } from './venue-item.module';


export const getVenues = (n: number): Venue[] => {
  const result: Venue[] = [];
  for (let i = 0; i < n; i++) {
    result.push({
      dateStart: '2012-01-02',
      dateEnd: '2012-01-05',
      title: 'Venue Title',
      venue: 'venue',
      organizer: 'venue organizer',
      credit: 'credit',
      city: 'city',
      state: 'state',
      country: 'country',
      pdfLink: 'pdfLink',
      venueImages: []
    });
  }
  return result;
};
describe('VenueItemComponent', () => {
  let component: VenueItemComponent;
  let fixture: ComponentFixture<VenueItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueItemComponent ],
      imports: [VenueItemModule, NgxsModule.forRoot([])]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueItemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    const venue = getVenues(4)[0];
    component.item = venue;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
