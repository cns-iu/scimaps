import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { CallForMacroscopesComponent } from './call-for-macroscopes.component';
import { CallForMacroscopesModule } from './call-for-macroscopes.module';

fdescribe('CallForMacroscopesComponent', () => {
  let component: CallForMacroscopesComponent;
  let fixture: ComponentFixture<CallForMacroscopesComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallForMacroscopesModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallForMacroscopesComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
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
  it('should display correct pdf link', () => {
    const pdfLink = 'https://www.cns.org/'
    component.pdfLink = pdfLink;
    fixture.detectChanges();
    const buttton = el.query(By.css('div.download a'));
    expect(buttton.nativeElement.href).toEqual(pdfLink);
  });
});
