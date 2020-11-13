import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverListingComponent } from './discover-listing.component';

describe('DiscoverListingComponent', () => {
  let component: DiscoverListingComponent;
  let fixture: ComponentFixture<DiscoverListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
