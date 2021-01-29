import { Shallow } from 'shallow-render';

import { AboutComponent } from './about.component';
import { AboutModule } from './about.module';

describe('AboutComponent', () => {
  let shallow: Shallow<AboutComponent>;

  beforeEach(() => {
    shallow = new Shallow(AboutComponent, AboutModule);
  });

  it('should update activePageTab to the one passed in', async () => {
    const { instance } = await shallow.render();
    instance.activePageTab = 0;
    instance.updateActivePageTab(1);
    expect(instance.activePageTab).toEqual(1);
  });
});