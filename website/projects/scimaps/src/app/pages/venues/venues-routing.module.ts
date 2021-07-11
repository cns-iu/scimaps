import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VenuesResolverService } from './venues-resolver.service';

import { VenuesComponent } from './venues.component';

const routes: Routes = [
  {
    path: '',
    component: VenuesComponent,
    resolve: {
      venues: VenuesResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenuesRoutingModule { }
