import { Shallow } from 'shallow-render';
import { ActivatedRoute, Router } from '@angular/router';

import { MacroscopeComponent } from './macroscope.component';
import { MacroscopeModule } from './macroscope.module';
import { MapMacroscopeItem } from '../../core/models/discover-item';

import { of } from 'rxjs';

const testItem: MapMacroscopeItem = {
  title: 'Title Test',
  makers: [
    {
      name: 'Maker 1',
      title: 'Job',
      body: 'test bio',
      image: 'thumbnail',
      affiliation: '',
      link: '',
      slug: '',
      roles: []
    },
    {
      name: 'Maker 2',
      title: 'Job',
      body: 'test bio',
      image: 'thumbnail',
      affiliation: '',
      link: '',
      slug: '',
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

describe('MacroscopeComponent', () => {
  let shallow: Shallow<MacroscopeComponent>;

  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async () => {
    shallow = new Shallow(MacroscopeComponent, MacroscopeModule)
      .mock(ActivatedRoute, {
        data: of({
          macroscope: testItem
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
