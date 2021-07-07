import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningMaterialListComponent } from './learning-material-list.component';
import { SharedModule } from '../../shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { LearningMaterialItemModule } from '../learning-material-item/learning-material-item.module';
import { MarkdownModule } from 'ngx-markdown';



@NgModule({
  declarations: [LearningMaterialListComponent],
  imports: [
    LearningMaterialItemModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
    SharedModule,
    MarkdownModule
  ], 
  exports: [LearningMaterialListComponent]
})
export class LearningMaterialsListModule { }
