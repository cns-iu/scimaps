import { Shallow } from 'shallow-render';
import { ActivatedRoute } from '@angular/router';

import { MacroscopesComponent } from './macroscopes.component';
import { MacroscopesModule } from './macroscopes.module';
import { DiscoverItem } from '../../core/models/discover-item';

import { of } from 'rxjs';

const discoverItem: DiscoverItem = {
  title: 'test',
  body: 'test',
  thumbnails: [
    {
      title: 'test',
      link: 'test',
      image: 'test'
    },
    {
      title: 'test',
      link: 'test',
      image: 'test'
    },
    {
      title: 'test',
      link: 'test',
      image: 'test'
    },
    {
      title: 'test',
      link: 'test',
      image: 'test'
    }
  ],
  slug: 'test',
  directory: 'test'
};

describe('MacroscopesComponent', () => {
  let shallow: Shallow<MacroscopesComponent>;

  beforeEach(async () => {
    shallow = new Shallow(MacroscopesComponent, MacroscopesModule)
      .mock(ActivatedRoute, {
        data: of({
          body: { body: '' },
          macroscopes: [
            discoverItem,
            discoverItem,
            discoverItem,
            discoverItem
          ]
        })
      })
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
