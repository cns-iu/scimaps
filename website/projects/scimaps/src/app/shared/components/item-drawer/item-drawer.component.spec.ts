import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Shallow } from 'shallow-render';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MapMacroscopeItem } from '../../../core/models/discover-item';
import { ItemDrawerComponent } from './item-drawer.component';
import { ItemDrawerModule } from './item-drawer.module';


const routes: Routes = [
  {path: '', component: class DummyComponent {}}
];

describe('ItemDrawerComponent', () => {
  const testItem: MapMacroscopeItem = {
    title: 'Title Test',
    makers: [
      {
        name: 'Maker 1',
        job: 'Job',
        bio: 'aaaaaaaaaaaaa',
        thumbnail: 'thumbnail'
      },
      {
        name: 'Maker 2',
        job: 'Job',
        bio: 'aaaaaaaaaaaaa',
        thumbnail: 'thumbnail'
      }
    ],
    location: 'Test location',
    credit: 'Test credits',
    year: '9999',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci. Nulla vitae mauris nisi. Aenean orci ipsum, scelerisque et arcu quis, molestie efficitur dui. Curabitur enim lacus, vehicula at arcu id, sagittis posuere est. Maecenas laoreet est eget tristique interdum. Fusce consequat, nisl ac bibendum facilisis, tellus nulla blandit orci, quis dignissim est mi ac justo. Pellentesque ultrices blandit diam quis pretium. Suspendisse ut ante in enim consequat semper id consectetur arcu. Proin ultricies vestibulum nulla sit amet.',
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

  let shallow: Shallow<ItemDrawerComponent>;
  const mockMatDialog = {
    open(...args: unknown[]): MatDialogRef<unknown, unknown> {
      return undefined as unknown as MatDialogRef<unknown, unknown>;
    }
  };

  beforeEach(async () => {
    shallow = new Shallow(ItemDrawerComponent, ItemDrawerModule)
    .replaceModule(RouterModule, RouterTestingModule.withRoutes(routes));
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

  it('opens the makers subdrawer', async () => {
    const { instance } = await shallow.render({ bind: { item: testItem, type: 'map' } });
    instance.openSubdrawer();
    expect(instance.showSubdrawer).toBeTrue();
  });

  it('closes the makers subdrawer', async () => {
    const { instance } = await shallow.render({ bind: { item: testItem, type: 'map' } });
    instance.closeSubdrawer();
    expect(instance.showSubdrawer).toBeFalse();
  });
});
