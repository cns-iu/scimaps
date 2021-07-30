import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Venue } from '../../../pages/venues/venues-resolver.service';
import { getVenues } from '../../../pages/venues/venues-resolver.service.spec';

import { GalleryItemComponent } from './gallery-item.component';
import { GalleryItemModule } from './gallery-item.module';


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
