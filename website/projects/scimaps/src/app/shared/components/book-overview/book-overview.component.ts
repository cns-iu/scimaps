import { Component, HostBinding, Input } from '@angular/core';


export interface Book {
  title: string;
  author: string;
  publisher: string;
  body: string;
  pdfLink: string;
  amazonLink: string;
  slug: string;
  images: {sm: string, lg: string}[];
}


/**
 * Display a book
 */
@Component({
  selector: 'sci-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.scss']
})
export class BookOverviewComponent {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-book-overview';

  /** Book to display */
  @Input() book!: Book;

  /** Maximum character count to show of book content by default */
  @Input() maxContentLength = 370;

  /** Whether the book content exceeds the maximum character count */
  get hasLongContent(): boolean {
    return this.book.body.length > this.maxContentLength;
  }

  /** Full book content */
  get fullContent(): string {
    return this.book.body;
  }

  /** Book content - truncated if necessary */
  get partialContent(): string {
    const {
      fullContent,
      maxContentLength,
      hasLongContent,
      fullContentVisible
    } = this;

    if (!hasLongContent || fullContentVisible) {
      return fullContent;
    }

    // Text breaking might need some improvement
    return `${fullContent.slice(0, maxContentLength)}...`;
  }

  /** Whether full book content should be shown */
  fullContentVisible = false;
}
