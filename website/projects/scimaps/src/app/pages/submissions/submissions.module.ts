import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubmissionsRoutingModule } from './submissions-routing.module';
import { SubmissionsComponent } from './submissions.component';


@NgModule({
  declarations: [SubmissionsComponent],
  imports: [
    CommonModule,
    SubmissionsRoutingModule
  ]
})
export class SubmissionsModule { }
