import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningCenterRoutingModule } from './learning-center-routing.module';
import { LearningCenterComponent } from './learning-center.component';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [LearningCenterComponent],
  imports: [
    CommonModule,
    LearningCenterRoutingModule,
    MarkdownModule
  ]
})
export class LearningCenterModule { }
