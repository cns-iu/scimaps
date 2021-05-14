import { Component, OnInit } from '@angular/core';

import { Book } from '../../shared/components/book-overview/book-overview.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'sci-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.books = data.books;
    });
  }
}
