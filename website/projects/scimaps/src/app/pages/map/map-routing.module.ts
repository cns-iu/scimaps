import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapResolverService } from './map-resolver.service';
import { MapComponent } from './map.component';


const routes: Routes = [{
  path: ':iteration/:sequence',
  component: MapComponent,
  resolve: {
    map: MapResolverService
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }
