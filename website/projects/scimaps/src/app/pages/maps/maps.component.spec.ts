import { Shallow } from 'shallow-render';
import { ActivatedRoute } from '@angular/router';

import { MapsComponent } from './maps.component';
import { MapsModule } from './maps.module';
import { DiscoverItem } from '../../core/models/discover-item';

import { of } from 'rxjs';
import { discoverItem } from '../macroscopes/macroscopes.component.spec';


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
      });
  });

  it('should create no more than itemsToDisplay number of sci-discover-listings', async () => {
    const { find, instance } = await shallow.render();
    const overviews = find('sci-discover-listing');
    expect(overviews.length).toBeLessThanOrEqual(instance.displayLimit);
  });

  it('calling showMoreMaps() should increase itemsToDisplay', async () => {
    const { instance, find } = await shallow.render();
    instance.showAllItems = true;
    instance.updateDisplayItems();
    const overviews = find('sci-discover-listing');
    expect(overviews.length).toBeGreaterThanOrEqual(instance.displayLimit);
  });
});
