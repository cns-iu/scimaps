import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { getVenues } from '../../../pages/venues/venues-resolver.service.spec';
import { VenueItemComponent } from './venue-item.component';
import { VenueItemModule } from './venue-item.module';

describe('VenueItemComponent', () => {
  let component: VenueItemComponent;
  let fixture: ComponentFixture<VenueItemComponent>;
  let router: Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueItemComponent ],
      imports: [VenueItemModule, MatIconTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueItemComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    const venue = getVenues(4)[0];
    component.item = venue;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('should make a call to openLink', () => {
    const spy = spyOn(window, 'open');
    component.openLink('external_link');
    expect(spy).toHaveBeenCalledWith('external_link', '_blank');
  });
  it('should call correct gallary url', () => {
    const spy = spyOn(router, 'navigate');
    const venue = getVenues(2)[0];
    component.gotoGallery(venue);
    expect(spy).toHaveBeenCalled();
  });
});
