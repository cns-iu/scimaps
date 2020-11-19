import { Shallow } from 'shallow-render';

import { MacroscopesPageComponent } from './macroscopes-page.component';
import { MacroscopesPageModule } from './macroscopes-page.module';

describe('MacroscopesPageComponent', () => {
  let shallow: Shallow<MacroscopesPageComponent>;

  beforeEach(async () => {
    shallow = new Shallow(MacroscopesPageComponent, MacroscopesPageModule);
  });

  it('should create no more than itemsToDisplay number of sci-discover-listings', async () => {
    const { find, instance } = await shallow.render();
    const overviews = find('sci-discover-listing');
    expect(overviews.length).toBeLessThanOrEqual(instance.itemsToDisplay);
  });

  it('calling showMoreMacroscopes() should increase itemsToDisplay', async () => {
    const { instance } = await shallow.render();
    const oldValue = instance.itemsToDisplay;
    instance.showMoreMacroscopes();
    expect(instance.itemsToDisplay).toBeGreaterThan(oldValue);
  });

  it('calling when you call showMoreMacroscopes() it should update the display items', async () => {
    const { instance } = await shallow.render();
    const spy = spyOn(instance, 'updateDisplayItems');
    instance.showMoreMacroscopes();
    expect(spy).toHaveBeenCalled();
  });

  it('moreMacroscopes() should return true if there are more items to display and false otherwise', async () => {
    const { instance } = await shallow.render();
    expect(instance.moreMacroscopes()).toBeTrue();
    instance.itemsToDisplay = instance.discoverItems.length + 1;
    expect(instance.moreMacroscopes()).toBeFalse();
  });
});
