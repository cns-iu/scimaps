import { Shallow } from 'shallow-render';

import { MobileHeaderMenuComponent } from './mobile-header-menu.component';
import { MobileHeaderMenuModule } from './mobile-header-menu.module';


describe('MobileHeaderMenuComponent', () => {
  let shallow: Shallow<MobileHeaderMenuComponent>;

  function itHasElement(selector: string): void {
    it(`has element ${selector}`, async () => {
      const { find } = await shallow.render();
      expect(find(selector)).toHaveFoundOne();
    });
  }

  beforeEach(() => {
    shallow = new Shallow(MobileHeaderMenuComponent, MobileHeaderMenuModule);
  });

  itHasElement('.search');
  itHasElement('sci-contact');

  it('has multiple links', async () => {
    const { find } = await shallow.render();
    expect(find('.link')).toHaveFoundMoreThan(1);
  });
});
