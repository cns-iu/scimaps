import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule, Store } from '@ngxs/store';
import { getVenues } from '../../../pages/venues/venues-resolver.service.spec';

import { VenuesTableComponent } from './venues-table.component';
import { VenuesTableModule } from './venues-table.module';

describe('VenuesTableComponent', () => {
  let component: VenuesTableComponent;
  let fixture: ComponentFixture<VenuesTableComponent>;
  let store: Store;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenuesTableModule, BrowserAnimationsModule, NgxsModule.forRoot([]), MatIconTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenuesTableComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should Call store', () => {
    const venue = getVenues(2)[0];
    const spy = spyOn(store, 'dispatch');
    component.openVenueGalleryDrawer(venue);
    expect(spy).toHaveBeenCalled();
  });
});
