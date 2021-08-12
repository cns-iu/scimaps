import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostingBodyResolverService } from './hosting-body-resolver.service';

import { HostingComponent } from './hosting.component';
import { LearningMaterialsResolverService } from './learning-materials-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: HostingComponent,
    resolve: {
      body: HostingBodyResolverService,
      learningMaterials: LearningMaterialsResolverService,
    },
    children: [
      {
        path: 'learning-material',
        loadChildren: () => import('../learning-material/learning-material.module').then(m => m.LearningMaterialModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HostingRoutingModule {}
