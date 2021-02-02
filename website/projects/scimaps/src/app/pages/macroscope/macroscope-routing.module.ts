import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MacroscopeResolverService } from './macroscope-resolver.service';
import { MacroscopeComponent } from './macroscope.component';


const routes: Routes = [{
  path: ':iteration/:sequence',
  component: MacroscopeComponent,
  resolve: {
    macroscope: MacroscopeResolverService
  },
  runGuardsAndResolvers: 'paramsOrQueryParamsChange'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MacroscopeRoutingModule { }
