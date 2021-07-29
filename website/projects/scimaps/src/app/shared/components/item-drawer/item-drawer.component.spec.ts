import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Shallow } from 'shallow-render';
import { MapMacroscopeItem } from '../../../core/models/discover-item';
import { ItemDrawerComponent } from './item-drawer.component';
import { ItemDrawerModule } from './item-drawer.module';

export const testItem: MapMacroscopeItem = {
  iteration: 1,
  title: 'Title Test',
  makers: [
    {
      name: 'Maker 1',
      title: 'title1',
      body: 'test bio',
      image: 'thumbnail',
      affiliation: 'affiliation 1',
      link: 'link1',
      slug: 'title1',
      roles: []
    },
    {
      name: 'Maker 2',
      title: 'title2',
      body: 'test bio 2',
      image: 'thumbnail 2',
      affiliation: 'affiliation 2',
      link: 'link2',
      slug: 'title2',
      roles: []
    }
  ],
  location: 'Test location',
  credit: 'Test credits',
  year: '9999',
  description: 'test description',
  references: ['Reference 1', 'Reference 2', 'Reference 3'],
  thumbnail: 'test thumbnail',
  translations: [
    {
      abbreviation: 'abbreviation',
      abbr_short: 'abbr_short',
      language: 'language',
      native: 'native'
    }
  ],
  externalLink: 'testlink'
};

describe('ItemDrawerComponent', () => {

  let shallow: Shallow<ItemDrawerComponent>;
  const mockMatDialog = {
    open(...args: unknown[]): MatDialogRef<unknown, unknown> {
      return undefined as unknown as MatDialogRef<unknown, unknown>;
    }
  };

  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  const mockStore = {
  };
  const mockActivateRoute = {
    snapshot: {
      params: {
      }
    }
  };

  beforeEach(async () => {
    shallow = new Shallow(ItemDrawerComponent, ItemDrawerModule)
    .mock(Router, mockRouter)
    .mock(Store, mockStore)
    .mock(ActivatedRoute, mockActivateRoute);
  });


  it('combines the maker names', async () => {
    const { instance } = await shallow.render({ bind: { item: testItem, type: 'map' } });
    expect(instance.makers).toBe('Maker 1, Maker 2');
  });

  it('changes the selected language', async () => {
    const { instance } = await shallow.render({ bind: { item: testItem, type: 'map' } });
    instance.languageSelect('French');
    expect(instance.selectedLanguage).toBe('French');
  });

  it('emits the selected language', async () => {
    const { instance, outputs } = await shallow.render({ bind: { item: testItem, type: 'map' } });
    instance.languageSelect('French');
    expect(outputs.languageChange.emit).toHaveBeenCalledWith('French');
  });

  it('opens the purchase modal', async () => {
    const { instance, get } = await shallow.mock(MatDialog, mockMatDialog).render({ bind: { item: testItem, type: 'map' } });
    instance.openPurchase();
    expect(get(MatDialog).open).toHaveBeenCalled();
  });

  it('closes the item drawer', async () => {
    const { instance } = await shallow.render({ bind: { item: testItem, type: 'map' } });
    instance.close();
    expect(mockRouter.navigate).toHaveBeenCalled();
  });
});
