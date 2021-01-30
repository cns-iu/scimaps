import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroscopeComponent } from './macroscope.component';

describe('MacroscopeComponent', () => {
  let component: MacroscopeComponent;
  let fixture: ComponentFixture<MacroscopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacroscopeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroscopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
