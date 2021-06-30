import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PartnersComponent } from './partners.component';
import { PartnersModule } from './partners.module';

const testPartners: {name: string, logo: string, link: string}[] = [
  {
    name: 'NSF',
    logo: 'assets/logos/logo-nsf.svg',
    link: 'https://www.nsf.gov/',
  },
];

describe('PartnersComponent', () => {
  let component: PartnersComponent;
  let fixture: ComponentFixture<PartnersComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnersModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('It should call open link on click', fakeAsync(() => {
    component.data = testPartners;
    const spy = spyOn(component, 'openLink');
    fixture.detectChanges();
    const image = el.query(By.css('img'));
    image.triggerEventHandler('click', {});
    fixture.detectChanges();
    tick(500);
    expect(spy).toHaveBeenCalled();
  }));

  it('It should open tab in new link when openLink is called', () => {
    const link = 'https://google.com';
    const spy = spyOn(window, 'open');
    component.openLink(link);
    expect(spy).toHaveBeenCalledWith(link, '_blank');
  });
});
