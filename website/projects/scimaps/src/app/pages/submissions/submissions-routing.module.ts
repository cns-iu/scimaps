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
    runGuardsAndResolvers: 'pathParamsOrQueryParamsChange'
  }, 
  {
    path: ':iteration',
    component: SubmissionsComponent,
    resolve: {
      submissions: SubmissionResolverService
    },
    children: [
      {
        path: '',
        loadChildren: () => import('../submission/submission.module').then(m => m.SubmissionModule),
        data: { animation: 'Macroscope', type: 'submission' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmissionsRoutingModule { }
