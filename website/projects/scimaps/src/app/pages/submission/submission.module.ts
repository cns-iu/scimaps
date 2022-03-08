import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmissionRoutingModule } from './submission-routing.module';
import { SubmissionComponent } from './submission.component';
import { ItemDrawerModule } from '../../shared/components/item-drawer/item-drawer.module';

@NgModule({
  declarations: [SubmissionComponent],
  imports: [
    CommonModule,
    SubmissionRoutingModule,
    ItemDrawerModule
  ]
})
export class SubmissionModule { }
