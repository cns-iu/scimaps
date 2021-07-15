import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningMaterialListComponent } from './learning-material-list.component';
import { SharedModule } from '../../shared.module';
import { LearningMaterialItemModule } from '../learning-material-item/learning-material-item.module';

@NgModule({
  declarations: [LearningMaterialListComponent],
  imports: [LearningMaterialItemModule, CommonModule, SharedModule],
  exports: [LearningMaterialListComponent],
})
export class LearningMaterialsListModule {}
