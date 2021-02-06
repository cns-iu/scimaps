import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapMacroscopeResolverService } from '../../shared/services/map-macroscope-resolver.service';
import { MacroscopeComponent } from './macroscope.component';


const routes: Routes = [{
  path: ':iteration/:sequence',
  component: MacroscopeComponent,
  resolve: {
    macroscope: MapMacroscopeResolverService
  },
  runGuardsAndResolvers: 'paramsOrQueryParamsChange'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MacroscopeRoutingModule { }
