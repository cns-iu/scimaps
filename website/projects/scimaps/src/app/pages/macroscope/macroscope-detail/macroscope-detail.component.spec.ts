import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroscopeDetailComponent } from './macroscope-detail.component';

describe('MacroscopeDetailComponent', () => {
  let component: MacroscopeDetailComponent;
  let fixture: ComponentFixture<MacroscopeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacroscopeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroscopeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
