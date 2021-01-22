import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyTableComponent } from './lazy-table.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [LazyTableComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [ LazyTableComponent ]
})
export class LazyTableModule { }
