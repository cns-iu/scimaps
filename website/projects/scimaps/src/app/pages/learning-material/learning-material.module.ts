import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearningMaterialRoutingModule } from './learning-material-routing.module';
import { LearningMaterialComponent } from './learning-material.component';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownModule } from 'ngx-markdown';
import { DrawerHeaderModule } from '../../shared/components/drawer-header/drawer-header.module';
import { DrawerModule } from '../../shared/components/drawer/drawer.module';


@NgModule({
  declarations: [LearningMaterialComponent],
  imports: [
    CommonModule,
    LearningMaterialRoutingModule,
    MatIconModule,
    MarkdownModule,
    DrawerHeaderModule,
    DrawerModule
  ]
})
export class LearningMaterialModule { }
