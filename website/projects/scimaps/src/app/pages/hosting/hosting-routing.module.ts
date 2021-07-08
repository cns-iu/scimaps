import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostingBodyResolverService } from './hosting-body-resolver.service';

import { HostingComponent } from './hosting.component';
import { LearningMaterialResolverService } from './learning-material-resolver.service';

const routes: Routes = [
  { 
    path: '',
    component: HostingComponent,
    resolve: {
      body: HostingBodyResolverService,
      learningMaterials: LearningMaterialResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostingRoutingModule { }
