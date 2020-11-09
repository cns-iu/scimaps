import { Component, HostListener, Input, OnInit } from '@angular/core';

import { Book } from '../../../core/models/book.model';

@Component({
  selector: 'sci-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.scss']
})
export class BookOverviewComponent implements OnInit {
  @Input() book!: Book;
  showAllText = false;
  maxTextLength = 370;
  tabletSize = 960;
  screenWidth = 1000;

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.screenWidth = window.innerWidth;
  }

  get markdown(): string {
    if (this.showAllText || this.book.body.length <= this.maxTextLength || !this.usingSmallScreen()) {
      return this.book.body;
    }

    return this.book.body.substring(0, this.maxTextLength) + '...';
  }

  get showButtonText(): string {
    if (this.showAllText) {
      return 'Show less';
    }

    return 'Read more...';
  }

  needShowMoreButton(): boolean {
    if (!this.usingSmallScreen()) {
      return false;
    }

    return this.book.body.length > this.maxTextLength;
  }

  usingSmallScreen(): boolean {
    return this.screenWidth <= this.tabletSize;
  }
}
