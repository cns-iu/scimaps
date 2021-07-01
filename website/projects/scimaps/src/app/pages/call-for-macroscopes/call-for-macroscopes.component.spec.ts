import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CallForMacroscopesComponent } from './call-for-macroscopes.component';
import { CallForMacroscopesModule } from './call-for-macroscopes.module';

describe('CallForMacroscopesComponent', () => {
  let component: CallForMacroscopesComponent;
  let fixture: ComponentFixture<CallForMacroscopesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallForMacroscopesModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallForMacroscopesComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
