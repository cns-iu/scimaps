import { Shallow } from 'shallow-render';

import { BreakpointDirective } from '../../../shared/directives/breakpoint.directive';
import { ContactComponent } from './contact.component';
import { ContactModule } from './contact.module';


describe('ContactComponent', () => {
  let shallow: Shallow<ContactComponent>;

  function itHasElement(selector: string): void {
    it(`has element ${selector}`, async () => {
      const { find } = await shallow.render();
      expect(find(selector)).toHaveFoundOne();
    });
  }

  beforeEach(() => {
    shallow = new Shallow(ContactComponent, ContactModule)
      .withStructuralDirective(BreakpointDirective);
  });

  itHasElement('.section-1');

  describe('on mobile', () => {
    itHasElement('.section-2');
  });

  // The else clause of structural directives seems to yet be supported by shallow-render
  // describe('on desktop', () => {
  //   itHasElement('.section-3');
  // });
});
