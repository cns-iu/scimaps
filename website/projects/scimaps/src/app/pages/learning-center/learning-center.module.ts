import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningCenterRoutingModule } from './learning-center-routing.module';
import { LearningCenterComponent } from './learning-center.component';


@NgModule({
  declarations: [LearningCenterComponent],
  imports: [
    CommonModule,
    LearningCenterRoutingModule
  ]
})
export class LearningCenterModule { }
