import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningMaterialItemComponent } from './learning-material-item.component';



@NgModule({
  declarations: [LearningMaterialItemComponent],
  imports: [
    CommonModule
  ],
  exports: [LearningMaterialItemComponent]
})
export class LearningMaterialItemModule { }
