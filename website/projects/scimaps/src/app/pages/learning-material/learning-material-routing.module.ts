import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearningMaterialComponent } from './learning-material.component';

const routes: Routes = [{
  path: '',
  component: LearningMaterialComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningMaterialRoutingModule { }
