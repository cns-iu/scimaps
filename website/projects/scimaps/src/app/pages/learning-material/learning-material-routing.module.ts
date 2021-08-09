import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearningMaterialResolverService } from './learning-material-resolver.service';
import { LearningMaterialComponent } from './learning-material.component';

const routes: Routes = [{
  path: ':slug',
  component: LearningMaterialComponent,
  resolve: {
    learningMaterial: LearningMaterialResolverService
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningMaterialRoutingModule { }
