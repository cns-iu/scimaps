import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningMaterialItemComponent } from './learning-material-item.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from '../../shared.module';



@NgModule({
  declarations: [LearningMaterialItemComponent],
  imports: [
    MatIconModule,
    MatCardModule,
    MarkdownModule,
    SharedModule,
    CommonModule
  ],
  exports: [LearningMaterialItemComponent]
})
export class LearningMaterialItemModule { }
