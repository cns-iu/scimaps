import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroscopesPageComponent } from './macroscopes-page.component';

describe('MacroscopesPageComponent', () => {
  let component: MacroscopesPageComponent;
  let fixture: ComponentFixture<MacroscopesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacroscopesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroscopesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
