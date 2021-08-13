import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VenueGalleryComponent } from '../../shared/components/venue-gallery/venue-gallery.component';
import { VenueResolverService } from './venue-resolver.service';
import { VenuesBodyResolverService } from './venues-body-resolver.service';
import { VenuesResolverService } from './venues-resolver.service';

import { VenuesComponent } from './venues.component';

const routes: Routes = [
  {
    path: '',
    component: VenuesComponent,
    resolve: {
      body: VenuesBodyResolverService,
      venues: VenuesResolverService,
    },
    children: [
      {
        path: 'gallery/:year/:month/:slug',
        component: VenueGalleryComponent,
        resolve: {
          venue: VenueResolverService
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenuesRoutingModule { }
