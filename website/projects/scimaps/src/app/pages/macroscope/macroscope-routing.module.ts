import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapMacroscopeResolverService } from '../../shared/services/map-macroscope-resolver.service';
import { MacroscopeDetailComponent } from './macroscope-detail/macroscope-detail.component';
import { MacroscopeComponent } from './macroscope.component';



const routes: Routes = [{
  path: ':iteration/:sequence',
  component: MacroscopeComponent,
  resolve: {
    macroscope: MapMacroscopeResolverService
  },
  runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  children: [
    {
      path: 'detail',
      component: MacroscopeDetailComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MacroscopeRoutingModule { }
