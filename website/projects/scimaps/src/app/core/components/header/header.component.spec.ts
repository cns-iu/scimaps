import { Shallow } from 'shallow-render';

import { BreakpointDirective } from '../../../shared/directives/breakpoint.directive';
import { HeaderComponent } from './header.component';
import { HeaderModule } from './header.module';


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
