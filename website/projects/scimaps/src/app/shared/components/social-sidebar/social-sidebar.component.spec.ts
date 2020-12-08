import { Shallow } from 'shallow-render';

import { SocialSidebarComponent } from './social-sidebar.component';
import { SocialSidebarModule } from './social-sidebar.module';

describe('SocialSidebarComponent', () => {
  let shallow: Shallow<SocialSidebarComponent>;

  beforeEach(() => {
    shallow = new Shallow(SocialSidebarComponent, SocialSidebarModule);
  });

  it('should go to the link when goToLink is called', async () => {
    const { instance } = await shallow.render();
    const spy = spyOn(window, 'open');
    instance.goToLink('www.google.com');
    expect(spy).toHaveBeenCalledWith('www.google.com', '_blank');
  });

  it('should call goToLink when a social button is clicked', async () => {
    const { instance, find } = await shallow.render();
    const spy = spyOn(instance, 'goToLink');
    const button = find('.social-button')[0];
    button.triggerEventHandler('click', {});
    expect(spy).toHaveBeenCalled();
  });
});
