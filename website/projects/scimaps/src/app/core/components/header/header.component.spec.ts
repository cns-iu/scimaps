import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule } from '@ngxs/store';
import { Shallow } from 'shallow-render';
import { BreakpointDirective } from '../../../shared/directives/breakpoint.directive';
import { HeaderComponent } from './header.component';
import { HeaderModule } from './header.module';



describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [HeaderModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        NgxsModule.forRoot(),
        MatIconTestingModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should call correct stream', () => {
    const spy1 = spyOn(component.exhibitStream, 'next');
    const spy2 = spyOn(component.contactStream, 'next');
    component.mouseEvents(new Event(''), 0);
    expect(spy1).toHaveBeenCalled();
    component.mouseEvents(new Event(''), 1);
    expect(spy2).toHaveBeenCalled();
  });

  it('should call correct stream', () => {
    const spy1 = spyOn(component.exhibitStream, 'next');
    const spy2 = spyOn(component.contactStream, 'next');
    component.mouseEvents(new Event(''), 0);
    expect(spy1).toHaveBeenCalled();
    component.mouseEvents(new Event(''), 1);
    expect(spy2).toHaveBeenCalled();
  });
  it('should open menu', fakeAsync(() => {
    const spy = spyOn(component.exhibitTrigger, 'openMenu');
    component.exhibitStream.next({type: 'mouseenter', e: new Event(''), index: 0});
    tick(500);
    expect(spy).toHaveBeenCalled();
  }));
  it('should open menu', fakeAsync(() => {
    const spy = spyOn(component.contactTrigger, 'openMenu');
    component.contactStream.next({type: 'mouseenter', e: new Event(''), index: 1});
    tick(500);
    expect(spy).toHaveBeenCalled();
  }));
});

describe('HeaderComponent', () => {
  let shallow: Shallow<HeaderComponent>;

  function itHasElement(selector: string): void {
    it(`has element ${selector}`, async () => {
      const { find } = await shallow.render();
      expect(find(selector)).toHaveFoundOne();
    });
  }

  beforeEach(() => {
    shallow = new Shallow(HeaderComponent, HeaderModule)
      .withStructuralDirective(BreakpointDirective);
  });


  describe('on mobile', () => {
    itHasElement('.sidenav-toggle');
  });

  // The else clause of structural directives seems to yet be supported by shallow-render
  // describe('on desktop', () => {
  //   itHasElement('.about');
  //   itHasElement('.exhibit');
  //   itHasElement('.explore');
  //   itHasElement('.contact');
  //   itHasElement('.search');
  // });
});
