import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { VenuesTableComponent } from './venues-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [VenuesTableComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule
  ],
  exports: [VenuesTableComponent],
  providers: [DatePipe]
})
export class VenuesTableModule { }
