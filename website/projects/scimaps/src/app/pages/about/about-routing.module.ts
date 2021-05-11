import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { AboutResolverService } from './about-resolver.service';
import { AboutBodyResolverService } from './about-body-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    resolve: {
      profiles: AboutResolverService,
      body: AboutBodyResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {}
