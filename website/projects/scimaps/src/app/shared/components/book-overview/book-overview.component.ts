import { Component, Input } from '@angular/core';

import { Book } from '../../../core/models/book.model';

@Component({
  selector: 'sci-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.scss']
})
export class BookOverviewComponent {
  @Input() book!: Book;

}
