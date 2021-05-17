import { TestBed } from '@angular/core/testing';

import { BooksResolverService } from './books-resolver.service';
import { ContentService, toSlug } from '../../shared/services/content.service';
import { Params } from '@angular/router';
import { getBooks } from './books.component.spec';
import { Book } from '../../shared/components/book-overview/book-overview.component';
import { of } from 'rxjs';

describe('BooksResolverService', () => {
  let service: BooksResolverService;
  let contentService: Params;
  const testBooks: Book[] = getBooks(10);
  // Index
  const testBook = {
    title: `title 1`,
    author: [`author-slug1`, 'author-slug2'],
    body: `body 1`,
    publisher: `publisher 1`,
    pdfLink: `pdfLink 1`,
    amazonLink: `amazonLink 1`,
    images: ['a.jpg', 'b.jpg', 'c.jpg']
  };
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
    const results = book.images.map((image: {sm: string, lg: string}) => {
      return {
        sm: `assets/${service.directory}/${book.slug}/${image.sm}`,
        lg: `assets/${service.directory}/${book.slug}/${image.lg}`
      };
    });
    expect(bookImages).toEqual(results);
  });

  it('should map to correct book object', () => {
    const book = service.toBookUI(testBook);
    expect(book.slug).toEqual(toSlug(testBook.title));
    expect(book.title).toEqual(testBook.title);
    expect(book.author).toEqual(testBook.author);
    expect(book.body).toEqual(testBook.body);
    expect(book.publisher).toEqual(testBook.publisher);
    expect(book.pdfLink).toEqual(testBook.pdfLink);
    expect(book.amazonLink).toEqual(testBook.amazonLink);
  });

  it('should should call contentService.getIndex once', () => {
    (contentService.getIndex as jasmine.Spy).withArgs('books').and.returnValue(
      of([testBook])
    );
    service.resolve();
    expect(contentService.getIndex).toHaveBeenCalledTimes(1);
    expect(contentService.getIndex).toHaveBeenCalledWith('books');
  });

  it('should give correct final object', async (done) => {
    (contentService.getIndex as jasmine.Spy).withArgs('books').and.returnValue(
      of([testBook])
    );
    (contentService.getContent as jasmine.Spy).withArgs('person/author-slug1').and.returnValue(
      of({
        name: 'Author 1'
      })
    );
    (contentService.getContent as jasmine.Spy).withArgs('person/author-slug2').and.returnValue(
      of({
        name: 'Author 2'
      })
    );
    const result = service.resolve();
    result.subscribe((books: Book[]) => {
      const book = books[0];
      expect(book.author).toEqual('Author 1, Author 2');
      done();
    });
  });
});
