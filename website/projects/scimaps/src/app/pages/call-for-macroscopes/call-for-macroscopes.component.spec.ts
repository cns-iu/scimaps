import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { CallForMacroscopesComponent } from './call-for-macroscopes.component';
import { CallForMacroscopesModule } from './call-for-macroscopes.module';

fdescribe('CallForMacroscopesComponent', () => {
  let component: CallForMacroscopesComponent;
  let fixture: ComponentFixture<CallForMacroscopesComponent>;
  let el: DebugElement;
  const body = {
    importantDates: [{ label: 'one', date: new Date() }],
    pdfLink: 'https://www.cns.org/a.pdf',
    lastIteration: 2,
    submitURL: 'https://www.cns.org/submit',
    tabs: [
      { header: '1', content: 'content one' },
      { header: '2', content: 'content two' },
      { header: '3', content: 'cotent three' }
    ]
  };
  const macroscopes = [
    { slug: '1', thumbnails: [ {image: 'one.jpg', title: 'title1'} ] },
    { slug: '2', thumbnails: [ {image: 'two.jpg', title: 'title2'} ] },
    { slug: '16', thumbnails:[ {image: 'sixteen.jpg', title: 'title16'} ] }
  ]
  beforeEach(async () => {

    const route = ({ data: of({ body, macroscopes }) } as any) as ActivatedRoute;
    await TestBed.configureTestingModule({
      imports: [
        CallForMacroscopesModule
      ],
      providers: [{ provide: ActivatedRoute, useValue: route }],
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
  it('should have correct submit link', () => {
    fixture.detectChanges();
    const spy = spyOn(window, 'open');
    expect(component.submitURL).toEqual(body.submitURL);
    component.submitMacroscope();
    expect(spy).toHaveBeenCalledWith(body.submitURL, '_blank');
  });
  it('should display correct pdf link', () => {
    fixture.detectChanges();
    const buttton = el.query(By.css('div.download a'));
    expect(component.pdfLink).toEqual(body.pdfLink);
    expect(buttton.nativeElement.href).toEqual(body.pdfLink);
  });
  it('should have correct tabs', () => {
    fixture.detectChanges();
    expect(component.tabHeaders).toEqual(body.tabs.map(item => item.header));
    expect(component.tabContents).toEqual(body.tabs.map(item => item.content));
  });
  it('should select correct last macroscope', () => {
    fixture.detectChanges();
    expect(component.lastIterationThumbnails).toEqual(macroscopes[1].thumbnails);
  });
});
