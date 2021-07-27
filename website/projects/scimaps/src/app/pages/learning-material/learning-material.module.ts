import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningMaterialRoutingModule } from './learning-material-routing.module';
import { LearningMaterialComponent } from './learning-material.component';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [LearningMaterialComponent],
  imports: [
    CommonModule,
    LearningMaterialRoutingModule,
    MatIconModule,
    MarkdownModule
  ]
})
export class LearningMaterialModule { }
