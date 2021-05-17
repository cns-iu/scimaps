import { Component, OnInit, OnDestroy } from '@angular/core';

import { Book } from '../../shared/components/book-overview/book-overview.component';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'sci-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, OnDestroy {

  books: Book[] = [];
  dataSubscription?: Subscription;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.dataSubscription = this.route.data.subscribe((data) => {
      if (data && data.hasOwnPropert('books') && Array.isArray(data.books)) {
        this.books = data.books;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}
