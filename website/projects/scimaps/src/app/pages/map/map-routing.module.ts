import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TileComponent } from '../../shared/components/tile/tile.component';

import { MapMacroscopeResolverService } from '../../shared/services/map-macroscope-resolver.service';
import { MapComponent } from './map.component';

const routes: Routes = [
  {
    path: ':iteration/:sequence',
    component: MapComponent,
    resolve: {
      map: MapMacroscopeResolverService,
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    children: [
      {
        path: 'details',
        component: TileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapRoutingModule {}
