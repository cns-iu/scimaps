import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroscopesComponent } from './macroscopes.component';

describe('MacroscopesComponent', () => {
  let component: MacroscopesComponent;
  let fixture: ComponentFixture<MacroscopesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacroscopesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroscopesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
