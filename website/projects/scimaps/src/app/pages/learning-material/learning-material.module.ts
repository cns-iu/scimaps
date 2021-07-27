import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningMaterialRoutingModule } from './learning-material-routing.module';
import { LearningMaterialComponent } from './learning-material.component';


@NgModule({
  declarations: [LearningMaterialComponent],
  imports: [
    CommonModule,
    LearningMaterialRoutingModule
  ]
})
export class LearningMaterialModule { }
