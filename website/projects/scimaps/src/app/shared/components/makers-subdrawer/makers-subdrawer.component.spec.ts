import { Shallow } from 'shallow-render';

import { MakersSubdrawerComponent } from './makers-subdrawer.component';
import { MakersSubdrawerModule } from './makers-subdrawer.module';

const type = 'macroscopes';

describe('MakersSubdrawerComponent', () => {
  let shallow: Shallow<MakersSubdrawerComponent>;

  beforeEach(async () => {
    shallow = new Shallow(MakersSubdrawerComponent, MakersSubdrawerModule);
  });

  it('should close the subdrawer', async () => {
    const { instance, find } = await shallow.render();
    const closeButton = find('.back-button');
    closeButton.triggerEventHandler('click', {});
    expect(instance.closeDrawer.emit).toHaveBeenCalled();
  });
});
