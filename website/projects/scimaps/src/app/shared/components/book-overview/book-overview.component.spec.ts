import { FormsModule } from '@angular/forms';
import { Shallow } from 'shallow-render';

import { Book } from '../../../core/models/book.model';
import { BookOverviewComponent } from './book-overview.component';
import { BookOverviewModule } from './book-overview.module';


const testBook: Book = {
  title: 'test title',
  markdown: 'test markdown',
  author: 'test author',
  publisher: 'test publisher',
  pdfLink: 'test pdflink',
  amazonLink: 'test amazonlink',
  slug: 'test slug'
};

describe('BookOverviewComponent', () => {
  let shallow: Shallow<BookOverviewComponent>;

  beforeEach(async () => {
    shallow = new Shallow(BookOverviewComponent, BookOverviewModule)
      .import(FormsModule);
  });

  it('should successfully create the title', async () => {
    const { find } = await shallow.render({ bind: { book: testBook }});
    const titleElement = find('.title').nativeElement as Element;
    expect(titleElement.innerHTML).toEqual('test title');
  });

  it('should successfully create the author div', async () => {
    const { find } = await shallow.render({ bind: { book: testBook }});
    const titleElement = find('.author').nativeElement as Element;
    expect(titleElement.innerHTML).toEqual('Author: test author');
  });

  it('should successfully create the publisher div', async () => {
    const { find } = await shallow.render({ bind: { book: testBook }});
    const titleElement = find('.publisher').nativeElement as Element;
    expect(titleElement.innerHTML).toEqual('Published by: test publisher');
  });

  it('should successfully create the markdown', async () => {
    const { find } = await shallow.render({ bind: { book: testBook }});
    expect(find('.markdown')).toHaveFoundOne();
  });
});
