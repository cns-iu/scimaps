import { Component, OnInit } from '@angular/core';

import { Book } from '../../shared/components/book-overview/book-overview.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'sci-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      // console.log('component', data);
      this.books = data.books;
    })
  }
}
