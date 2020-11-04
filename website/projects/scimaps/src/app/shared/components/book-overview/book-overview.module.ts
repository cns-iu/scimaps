import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookOverviewComponent } from './book-overview.component';



@NgModule({
  declarations: [BookOverviewComponent],
  imports: [
    CommonModule
  ],
  exports: [BookOverviewComponent]
})
export class BookOverviewModule { }
