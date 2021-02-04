import { Shallow } from 'shallow-render';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { MapComponent } from './map.component';
import { MapModule } from './map.module';
import { MapMacroscopeItem } from '../../core/models/discover-item';

const routes: Routes = [
  {path: '', component: class DummyComponent {}}
];

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
      abbreviation: 'en',
      abbr_short: 'en',
      language: 'en',
      native: 'en'
    },
    {
      abbreviation: 'zh',
      abbr_short: 'zh',
      language: 'zh',
      native: 'zh'
    }
  ],
  externalLink: 'testlink'
};

describe('MapComponent', () => {
  let shallow: Shallow<MapComponent>;

  beforeEach(async () => {
    shallow = new Shallow(MapComponent, MapModule).replaceModule(
      RouterModule,
      RouterTestingModule.withRoutes(routes)
    );
  });

  // it('should change the language', async () => {
  //   const { instance, inject } = await shallow.render();
  //   const location = inject(Location);
  //   instance.selectedItem = testItem;
  //   instance.changeLanguage('zh');
  //   expect(instance.currentLanguage).toBe('zh');
  // });
});
