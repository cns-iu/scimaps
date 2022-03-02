import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapMacroscopeResolverService } from '../../shared/services/map-macroscope-resolver.service';
import { SubmissionComponent } from './submission.component';

const routes: Routes = [{
  path: ':sequence',
  component: SubmissionComponent,
  resolve: {
    submission: MapMacroscopeResolverService
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmissionRoutingModule { }
