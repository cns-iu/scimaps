import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallOutComponent } from './call-out.component';



@NgModule({
  declarations: [CallOutComponent],
  imports: [
    CommonModule
  ],
  exports: [CallOutComponent]
})
export class CallOutModule { }
