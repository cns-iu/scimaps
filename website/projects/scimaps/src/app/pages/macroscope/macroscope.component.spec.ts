import { Shallow } from 'shallow-render';
import { ActivatedRoute, Router } from '@angular/router';

import { MacroscopeComponent } from './macroscope.component';
import { MacroscopeModule } from './macroscope.module';

import { of } from 'rxjs';
import { testItem } from '../../shared/components/item-drawer/item-drawer.component.spec';


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
