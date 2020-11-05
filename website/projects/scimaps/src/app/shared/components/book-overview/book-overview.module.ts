import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookOverviewComponent } from './book-overview.component';
import { MarkdownModule } from 'ngx-markdown';



@NgModule({
  declarations: [BookOverviewComponent],
  imports: [
    CommonModule,
    MarkdownModule
  ],
  exports: [BookOverviewComponent]
})
export class BookOverviewModule { }
