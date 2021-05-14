import { FormsModule } from '@angular/forms';
import { Shallow } from 'shallow-render';

import { BooksComponent } from './books.component';
import { BooksModule } from './books.module';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Book } from '../../shared/components/book-overview/book-overview.component';

export function getBooks(numberOfProfiles: number): Book[] {
  const books: Book[] = [];
  for (let i = 0; i < numberOfProfiles; i++) {
    books.push({
      title: `title ${i}`,
      author: `author ${i}`,
      body: `body ${i}`,
      publisher: `publisher ${i}`,
      slug: 'slug ${i}',
      pdfLink: 'pdfLink${i}',
      amazonLink: `amazonLink ${i}`,
      images: []
    });
  }
  return books;
}

describe('BooksComponent', () => {
  let shallow: Shallow<BooksComponent>;

  beforeEach(async () => {
    shallow = new Shallow(BooksComponent, BooksModule)
    .mock(ActivatedRoute, {
      data: of({
        books: getBooks(4)
      })
    })
    .import(FormsModule);
  });

  it('should create a books-overview component for each book', async () => {
    const { find } = await shallow.render();
    const overviews = find('sci-book-overview');
    expect(overviews.length).toEqual(4);
  });
});
