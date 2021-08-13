import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { getVenues } from '../../../pages/venues/venues-resolver.service.spec';
import { VenuesTableComponent } from './venues-table.component';
import { VenuesTableModule } from './venues-table.module';


describe('VenuesTableComponent', () => {
  let component: VenuesTableComponent;
  let fixture: ComponentFixture<VenuesTableComponent>;
  let router: Router
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenuesTableModule, BrowserAnimationsModule, MatIconTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenuesTableComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call openLink', () => {
    const spy = spyOn(window, 'open');
    component.openLink('link');
    expect(spy).toHaveBeenCalledWith('link', '_blank');
  });
  it('should call correct gallary url', () => {
    const spy = spyOn(router, 'navigate');
    const venue = getVenues(1)[0];
    component.gotoGallery(venue);
    expect(spy).toHaveBeenCalled();
  });
  it('should call correct gallary url', () => {
    const venue = getVenues(1)[0];
    const result = component.getLocation(venue);
    expect(result).toEqual([venue.city, venue.state, venue.country].filter(value => value).join(', '));
  });
});
