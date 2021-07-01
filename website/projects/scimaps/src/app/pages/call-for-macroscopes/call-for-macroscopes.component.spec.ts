import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CallForMacroscopesComponent } from './call-for-macroscopes.component';
import { CallForMacroscopesModule } from './call-for-macroscopes.module';

fdescribe('CallForMacroscopesComponent', () => {
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
  
  it('should select active page tab', () => {
    component.updateActivePageTab(1);
    fixture.detectChanges();
    expect(component.activePageTab).toEqual(1);
  });
  it('should open correct submit link', () => {
    const spy = spyOn(window, 'open');
    component.submitURL = 'https://www.cns.org/'
    component.submitMacroscope();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith(component.submitURL ,'_blank');
  });
});
