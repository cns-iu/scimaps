import { Shallow } from 'shallow-render';
import { ActivatedRoute, Router } from '@angular/router';

import { MapComponent } from './map.component';
import { MapModule } from './map.module';

import { of } from 'rxjs';
import { testItem } from '../../shared/components/item-drawer/item-drawer.component.spec';

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
