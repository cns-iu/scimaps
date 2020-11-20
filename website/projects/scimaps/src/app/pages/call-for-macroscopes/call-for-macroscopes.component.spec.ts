import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallForMacroscopesComponent } from './call-for-macroscopes.component';

describe('CallForMacroscopesComponent', () => {
  let component: CallForMacroscopesComponent;
  let fixture: ComponentFixture<CallForMacroscopesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallForMacroscopesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallForMacroscopesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
