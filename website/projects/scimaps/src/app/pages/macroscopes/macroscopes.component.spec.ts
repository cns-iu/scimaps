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
      });
  });

  it('should create no more than itemsToDisplay number of sci-discover-listings', async () => {
    const { find, instance } = await shallow.render();
    const overviews = find('sci-discover-listing');
    expect(overviews.length).toBeLessThanOrEqual(instance.displayLimit);
  });

  it('calling showMoreMacroscopes() should increase itemsToDisplay', async () => {
    const { instance, find } = await shallow.render()
    instance.showAllItems = true
    instance.updateDisplayItems();
    const overviews = find('sci-discover-listing');
    expect(overviews.length).toBeGreaterThanOrEqual(instance.displayLimit);
  });
});
