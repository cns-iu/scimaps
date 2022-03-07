import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapsBodyResolverService } from './maps-body-resolver.service';
import { MapsResolverService } from './maps-resolver.service';
import { MapsComponent } from './maps.component';


const routes: Routes = [
  {
  path: '',
  component: MapsComponent,
  resolve: {
    maps: MapsResolverService,
    body: MapsBodyResolverService
  },
  runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
  children: [
    {
      path: '',
      loadChildren: () => import('../map/map.module').then(m => m.MapModule),
      data: { animation: 'Map', type: 'map'}
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
