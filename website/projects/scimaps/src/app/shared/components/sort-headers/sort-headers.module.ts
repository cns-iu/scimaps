import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortHeadersComponent } from './sort-headers.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [SortHeadersComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatIconModule
  ],
  exports: [SortHeadersComponent]
})
export class SortHeadersModule { }
