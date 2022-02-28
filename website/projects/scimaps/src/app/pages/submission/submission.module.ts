import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmissionRoutingModule } from './submission-routing.module';
import { SubmissionComponent } from './submission.component';

@NgModule({
  declarations: [SubmissionComponent],
  imports: [
    CommonModule,
    SubmissionRoutingModule
  ]
})
export class SubmissionModule { }
