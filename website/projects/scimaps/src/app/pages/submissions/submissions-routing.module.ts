import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubmissionResolverService } from './submission-resolver.service';
import { SubmissionsBodyResolverService } from './submissions-body-resolver.service';
import { SubmissionsComponent } from './submissions.component';

const routes: Routes = [
  {
    path: '',
    component: SubmissionsComponent,
    resolve: {
      submissions: SubmissionResolverService,
      body: SubmissionsBodyResolverService
    },
    runGuardsAndResolvers: 'pathParamsOrQueryParamsChange',
    children: [
      {
        path: '',
        loadChildren: () => import('../submission/submission.module').then(m => m.SubmissionModule),
        data: { animation: 'Macroscope', type: 'macroscope' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmissionsRoutingModule { }
