import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearningCenterComponent } from './learning-center.component';

const routes: Routes = [{ path: '', component: LearningCenterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningCenterRoutingModule { }
