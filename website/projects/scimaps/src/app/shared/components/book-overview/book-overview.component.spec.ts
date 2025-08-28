import { FormsModule } from '@angular/forms';
import { Shallow } from 'shallow-render';

import { Book, BookOverviewComponent } from './book-overview.component';
import { BookOverviewModule } from './book-overview.module';


describe('BookOverviewComponent', () => {
  const testBook: Book = {
    title: 'test title',
    body: 'test markdown',
    author: 'test author',
    publisher: 'test publisher',
    pdfLink: 'test pdflink',
    amazonLink: 'test amazonlink',
    slug: 'test slug',
    images: [],
    date: 'test date',
    publisherLink: 'test publisherLink'
  };
  const testBookLongBody = {
    ...testBook,
    body: 'na '.repeat(500) + ' Batman'
  };

  let shallow: Shallow<BookOverviewComponent>;

  function itHasElement(selector: string, book = testBook): void {
    it(`has element ${selector}`, async () => {
      const { find } = await shallow.render({ bind: { book } });
      expect(find(selector)).toHaveFoundOne();
    });
  }

  function itHasElementWithContent(selector: string, content: string, book = testBook): void {
    it(`has the correct content for ${selector}`, async () => {
      const { find } = await shallow.render({ bind: { book } });
      const el = find(selector).nativeElement as Element;
      expect(el.innerHTML).toContain(content);
    });
  }

  beforeEach(async () => {
    shallow = new Shallow(BookOverviewComponent, BookOverviewModule)
      .import(FormsModule);
  });

  itHasElementWithContent('.title', testBook.title);
  itHasElementWithContent('.author', testBook.author);
  itHasElementWithContent('.publisher', testBook.publisher);
  itHasElement('.markdown.full');
  itHasElement('.markdown.partial');

  describe('.partialContent', () => {
    it('is the full content if fullContentVisible is true', async () => {
      const { instance } = await shallow.render({ bind: { book: testBookLongBody } });
      instance.fullContentVisible = true;
      expect(instance.partialContent).toEqual(testBookLongBody.body);
    });

    it('is the full content if the content is short', async () => {
      const { instance } = await shallow.render({ bind: { book: testBook } });
      expect(instance.partialContent).toEqual(testBook.body);
    });

    it('is truncated if the content is long and fullContentVisible is false', async () => {
      const { instance } = await shallow.render({ bind: { book: testBookLongBody } });
      instance.fullContentVisible = false;
      expect(instance.partialContent).not.toEqual(testBookLongBody.body);
    });
  });
});
