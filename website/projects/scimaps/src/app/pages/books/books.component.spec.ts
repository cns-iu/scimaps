import { MarkdownModule, MarkdownService } from 'ngx-markdown';
import { Shallow } from 'shallow-render';

import { BooksComponent } from './books.component';
import { BooksModule } from './books.module';

describe('BooksComponent', () => {
 let shallow: Shallow<BooksComponent>;

 beforeEach(async () => {
   shallow = new Shallow(BooksComponent, BooksModule)
   .provide({ provide: MarkdownService, useValue: {} })
   .dontMock(MarkdownService)
  //  .replaceModule(MarkdownModule, MarkdownModule.forRoot())
  //  .mock(MarkdownService, {});
 });

 it('should create a books-overview component for each book', async () => {
  const { find } = await shallow.render();
  const overviews = find('sci-book-overview');
  expect(overviews.length).toEqual(3);
 });
});
