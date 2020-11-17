import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BookOverviewModule } from '../../shared/components/book-overview/book-overview.module';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';


@NgModule({
  imports: [
    CommonModule,

    BooksRoutingModule,
    BookOverviewModule
  ],
  declarations: [BooksComponent]
})
export class BooksModule { }
