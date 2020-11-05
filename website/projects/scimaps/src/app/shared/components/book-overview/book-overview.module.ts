import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookOverviewComponent } from './book-overview.component';
import { MarkdownModule } from 'ngx-markdown';



@NgModule({
  imports: [
    CommonModule,
    MarkdownModule
  ],
  declarations: [BookOverviewComponent],
  exports: [BookOverviewComponent]
})
export class BookOverviewModule { }
