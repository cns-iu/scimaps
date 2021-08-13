import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { getVenues } from '../../../pages/venues/venues-resolver.service.spec';
import { VenueItemComponent } from './venue-item.component';
import { VenueItemModule } from './venue-item.module';




describe('VenueItemComponent', () => {
  let component: VenueItemComponent;
  let fixture: ComponentFixture<VenueItemComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueItemComponent ],
      imports: [VenueItemModule, MatIconTestingModule, RouterTestingModule]
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
