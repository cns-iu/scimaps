import { Shallow } from 'shallow-render';
import { ActivatedRoute } from '@angular/router';

import { MapsComponent } from './maps.component';
import { MapsModule } from './maps.module';
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


describe('MapsComponent', () => {
  let shallow: Shallow<MapsComponent>;

  beforeEach(async () => {
    shallow = new Shallow(MapsComponent, MapsModule)
      .mock(ActivatedRoute, {
        data: of({
          body: { body: '' },
          maps: [
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

  it('calling showMoreMaps() should increase itemsToDisplay', async () => {
    const { instance } = await shallow.render();
    const oldValue = instance.itemsToDisplay;
    instance.showMoreMaps();
    expect(instance.itemsToDisplay).toBeGreaterThan(oldValue);
  });

  it('calling when you call showMoreMaps() it should update the display items', async () => {
    const { instance } = await shallow.render();
    const spy = spyOn(instance, 'updateDisplayItems');
    instance.showMoreMaps();
    expect(spy).toHaveBeenCalled();
  });

  it('moreMaps() should return true if there are more items to display and false otherwise', async () => {
    const { instance } = await shallow.render();
    expect(instance.moreMaps()).toBeTrue();
    instance.itemsToDisplay = instance.discoverItems.length + 1;
    expect(instance.moreMaps()).toBeFalse();
  });
});
