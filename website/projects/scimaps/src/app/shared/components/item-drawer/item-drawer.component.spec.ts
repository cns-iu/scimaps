import { Shallow } from 'shallow-render';
import { MapItem } from '..//discover-listing/discover-item';
import { ItemDrawerComponent } from './item-drawer.component';
import { ItemDrawerModule } from './item-drawer.module';


describe('ItemDrawerComponent', () => {
  const testItem: MapItem = {
    title: 'Title Test',
    makers: ['Maker 1', 'Maker 2'],
    location: 'Test location',
    credit: 'Test credits',
    year: '9999',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci. Nulla vitae mauris nisi. Aenean orci ipsum, scelerisque et arcu quis, molestie efficitur dui. Curabitur enim lacus, vehicula at arcu id, sagittis posuere est. Maecenas laoreet est eget tristique interdum. Fusce consequat, nisl ac bibendum facilisis, tellus nulla blandit orci, quis dignissim est mi ac justo. Pellentesque ultrices blandit diam quis pretium. Suspendisse ut ante in enim consequat semper id consectetur arcu. Proin ultricies vestibulum nulla sit amet.',
    references: ['Reference 1', 'Reference 2', 'Reference 3'],
    thumbnail: 'test thumbnail'
  };

  let shallow: Shallow<ItemDrawerComponent>;

  beforeEach(async () => {
    shallow = new Shallow(ItemDrawerComponent, ItemDrawerModule);
  });

  it('closes the drawer', async () => {
    const { instance, outputs } = await shallow.render({ bind: { item: testItem } });
    instance.close();
    expect(outputs.closeDrawer.emit).toHaveBeenCalled();
  });

  it('changes the selected language', async () => {
    const { instance } = await shallow.render({ bind: { item: testItem } });
    instance.languageSelect('French');
    expect(instance.selectedLanguage).toBe('French');
  });

  it('emits the selected language', async () => {
    const { instance, outputs } = await shallow.render({ bind: { item: testItem } });
    instance.languageSelect('French');
    expect(outputs.languageChange.emit).toHaveBeenCalledWith('French');
  });
});
