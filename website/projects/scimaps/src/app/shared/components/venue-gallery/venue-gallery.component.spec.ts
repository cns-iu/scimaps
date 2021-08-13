import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { getVenues } from '../../../pages/venues/venues-resolver.service.spec';
import { VenueGalleryComponent } from './venue-gallery.component';
import { VenueGalleryModule } from './venue-gallery.module';


describe('VenueGalleryComponent', () => {
  let component: VenueGalleryComponent;
  let fixture: ComponentFixture<VenueGalleryComponent>;
  let router: Router;
  beforeEach(async () => {
    const route = {snapshot: {data: {venue: getVenues(1)[0]}}};
    await TestBed.configureTestingModule({
      declarations: [ VenueGalleryComponent ],
      imports: [VenueGalleryModule, BrowserAnimationsModule, RouterTestingModule],
      providers: [
        {provide: ActivatedRoute, useValue: route}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueGalleryComponent);
    router = TestBed.inject(Router)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
