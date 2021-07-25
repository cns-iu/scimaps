import { Shallow } from 'shallow-render';
import { ActivatedRoute, Router } from '@angular/router';

import { MapComponent } from './map.component';
import { MapModule } from './map.module';
import { MapMacroscopeItem } from '../../core/models/discover-item';

import { of } from 'rxjs';

const testItem: MapMacroscopeItem = {
  title: 'Title Test',
  makers: [
    {
      name: 'Maker 1',
      title: 'Job1',
      body: 'test bio1',
      image: 'thumbnail1',
      affiliation: 'aff1',
      link: 'link1',
      slug: 'slug1',
      roles: []
    },
    {
      name: 'Maker 2',
      title: 'Job2',
      body: 'test bio2',
      image: 'thumbnail',
      affiliation: 'aff2',
      link: 'link2',
      slug: 'slug2',
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

  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async () => {
    shallow = new Shallow(MapComponent, MapModule)
      .mock(ActivatedRoute, {
        data: of({
          map: testItem
        }),
        snapshot: {
          paramMap: {
            get: jasmine.createSpy('get')
          }
        }
      })
      .mock(Router, mockRouter);
  });


  it('should assign selectedItem', async () => {
    const { instance } = await shallow.render();
    expect(instance.selectedItem).toBe(testItem);
  });

  it('should change the language', async () => {
    const { instance } = await shallow.render();
    instance.changeLanguage('zh');
    expect(mockRouter.navigate).toHaveBeenCalled();
  });
});
