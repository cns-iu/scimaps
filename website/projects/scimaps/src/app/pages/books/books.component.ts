import { Component } from '@angular/core';

import * as bookData from '../../../assets/books/index.json';
import { Book } from '../../core/models/book.model';

@Component({
  selector: 'sci-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  // tslint:disable-next-line: no-any
  bookJson: any = bookData;
  books: Book[] = this.bookJson.default;
}
