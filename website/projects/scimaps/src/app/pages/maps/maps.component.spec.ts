import { Shallow } from 'shallow-render';
import { RouterTestingModule } from "@angular/router/testing";
import { RouterModule, Routes } from '@angular/router';

import { MapsComponent } from './maps.component';
import { MapsModule } from './maps.module';

const routes: Routes = [
  {path: '', component: class DummyComponent {}}
];

describe('MapsComponent', () => {
  let shallow: Shallow<MapsComponent>;

  beforeEach(async () => {
    shallow = new Shallow(MapsComponent, MapsModule).replaceModule(
      RouterModule,
      RouterTestingModule.withRoutes(routes)
    );
  });

  // it('should create no more than itemsToDisplay number of sci-discover-listings', async () => {
  //   const { find, instance } = await shallow.render();
  //   const overviews = find('sci-discover-listing');
  //   expect(overviews.length).toBeLessThanOrEqual(instance.itemsToDisplay);
  // });

  // it('calling showMoreMaps() should increase itemsToDisplay', async () => {
  //   const { instance } = await shallow.render();
  //   const oldValue = instance.itemsToDisplay;
  //   instance.showMoreMaps();
  //   expect(instance.itemsToDisplay).toBeGreaterThan(oldValue);
  // });

  // it('calling when you call showMoreMaps() it should update the display items', async () => {
  //   const { instance } = await shallow.render();
  //   const spy = spyOn(instance, 'updateDisplayItems');
  //   instance.showMoreMaps();
  //   expect(spy).toHaveBeenCalled();
  // });

  // it('moreMaps() should return true if there are more items to display and false otherwise', async () => {
  //   const { instance } = await shallow.render();
  //   expect(instance.moreMaps()).toBeTrue();
  //   instance.itemsToDisplay = instance.discoverItems.length + 1;
  //   expect(instance.moreMaps()).toBeFalse();
  // });
});
