import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { Venue } from '../../../pages/venues/venues-resolver.service';
import { getVenues } from '../../../pages/venues/venues-resolver.service.spec';

import { VenueItemComponent } from './venue-item.component';
import { VenueItemModule } from './venue-item.module';



describe('VenueItemComponent', () => {
  let component: VenueItemComponent;
  let fixture: ComponentFixture<VenueItemComponent>;
  let store: Store;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueItemComponent ],
      imports: [VenueItemModule, NgxsModule.forRoot([]), MatIconTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueItemComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('should create', () => {
    const venue = getVenues(4)[0];
    component.item = venue;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should Call store', () => {
    const venue = getVenues(2)[0];
    const spy = spyOn(store, 'dispatch');
    component.openDrawer(venue);
    expect(spy).toHaveBeenCalled();
  });
});
