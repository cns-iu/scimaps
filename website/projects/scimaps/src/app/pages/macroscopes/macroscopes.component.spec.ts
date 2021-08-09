import { Shallow } from 'shallow-render';
import { ActivatedRoute } from '@angular/router';

import { MacroscopesComponent } from './macroscopes.component';
import { MacroscopesModule } from './macroscopes.module';
import { DiscoverItem } from '../../core/models/discover-item';

import { of } from 'rxjs';

export const discoverItem: DiscoverItem = {
  title: 'test',
  body: 'test',
  thumbnails: [
    {
      title: 'test1',
      link: 'test1',
      image: 'test1'
    },
    {
      title: 'test2',
      link: 'test2',
      image: 'test2'
    },
    {
      title: 'test3',
      link: 'test3',
      image: 'test3'
    },
    {
      title: 'test4',
      link: 'test4',
      image: 'test4'
    }
  ],
  slug: 'test',
  directory: 'test',
  iteration: 1
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
      });
  });

  it('should create no more than itemsToDisplay number of sci-discover-listings', async () => {
    const { find, instance } = await shallow.render();
    const overviews = find('sci-discover-listing');
    expect(overviews.length).toBeLessThanOrEqual(instance.displayLimit);
  });

  it('calling showMoreMacroscopes() should increase itemsToDisplay', async () => {
    const { instance, find } = await shallow.render();
    instance.showAllItems = true;
    instance.updateDisplayItems();
    const overviews = find('sci-discover-listing');
    expect(overviews.length).toBeGreaterThanOrEqual(instance.displayLimit);
  });
});
