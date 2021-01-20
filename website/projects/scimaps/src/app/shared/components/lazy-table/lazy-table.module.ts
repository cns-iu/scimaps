import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyTableComponent } from './lazy-table.component';



@NgModule({
  declarations: [LazyTableComponent],
  imports: [
    CommonModule
  ],
  exports: [ LazyTableComponent ]
})
export class LazyTableModule { }
