import { TestBed } from '@angular/core/testing';

import { BooksResolverService } from './books-resolver.service';
import { ContentService } from '../../shared/services/content.service';
import { Params } from '@angular/router';
import { getBooks } from './books.component.spec';
import { Book } from '../../shared/components/book-overview/book-overview.component';

describe('BooksResolverService', () => {
  let service: BooksResolverService;
  let contentService: Params;
  const testBooks: Book[] = getBooks(10);
  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', ['getIndex', 'getContent']);
    TestBed.configureTestingModule({
      providers: [
        BooksResolverService,
        {provide: ContentService, useValue: contentServiceSpy}
      ]
    });
    service = TestBed.inject(BooksResolverService);
    contentService = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should give correct relative image path', () => {
    const book = testBooks[0];
    const bookImages = service.getImageSource(book);
    const results = book.images.map((image: string) => {
      return `assets/${service.directory}/${book.slug}/${image}`
    })
    expect(bookImages).toEqual(results);
  });
});
