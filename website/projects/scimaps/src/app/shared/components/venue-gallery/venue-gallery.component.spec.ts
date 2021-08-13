import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueGalleryComponent } from './venue-gallery.component';

describe('VenueGalleryComponent', () => {
  let component: VenueGalleryComponent;
  let fixture: ComponentFixture<VenueGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
