import { Shallow } from 'shallow-render';

import { MenuIconComponent } from './menu-icon.component';
import { MenuIconModule } from './menu-icon.module';


describe('MenuIconComponent', () => {
  let shallow: Shallow<MenuIconComponent>;

  beforeEach(() => {
    shallow = new Shallow(MenuIconComponent, MenuIconModule);
  });

  it('has an icon element', async () => {
    const { find } = await shallow.render();
    expect(find('.icon')).toHaveFoundOne();
  });

  it('adds the alternate class when the corresponding input is set', async () => {
    const { find } = await shallow.render({ bind: { alternateIcon: true } });
    expect(find('.alternate')).toHaveFoundOne();
  });
});
