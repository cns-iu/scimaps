import { FormsModule } from '@angular/forms';
import { Shallow } from 'shallow-render';

import { Book } from '../../../core/models/book.model';
import { BookOverviewComponent } from './book-overview.component';
import { BookOverviewModule } from './book-overview.module';


const testBook: Book = {
  title: 'test title',
  body: 'test markdown',
  author: 'test author',
  publisher: 'test publisher',
  pdfLink: 'test pdflink',
  amazonLink: 'test amazonlink',
  slug: 'test slug'
};

const longBodyBook: Book = {
  title: 'test title',
  body: '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120',
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

  it('should not truncate the markdown text if showAllText is set to true', async () => {
    const { instance } = await shallow.render({ bind: { book: longBodyBook }});
    instance.showAllText = true;
    expect(instance.markdown).toEqual(longBodyBook.body);
  });

  it('should not truncate the markdown text if body.length is less than or equal to maxTextLength', async () => {
    const { instance } = await shallow.render({ bind: { book: testBook }});
    expect(instance.markdown).toEqual(testBook.body);
  });

  it('should not truncate the markdown text if the users screen is larger than tabletSize', async () => {
    const { instance } = await shallow.render({ bind: { book: longBodyBook }});
    instance.screenWidth = instance.tabletSize + 1;
    expect(instance.markdown).toEqual(longBodyBook.body);
  });

  it('showButtonText should return "show less" when showAllText is true', async () => {
    const { instance } = await shallow.render({ bind: { book: testBook }});
    instance.showAllText = true;
    expect(instance.showButtonText).toEqual('Show less');
  });

  it('showButtonText should return "show more..." when showAllText is true', async () => {
    const { instance } = await shallow.render({ bind: { book: testBook }});
    instance.showAllText = false;
    expect(instance.showButtonText).toEqual('Read more...');
  });

  it('needShowMoreButton should return false whenever the user is usingSmallScreen', async () => {
    const { instance } = await shallow.render({ bind: { book: testBook }});
    instance.screenWidth = instance.tabletSize + 1;
    expect(instance.needShowMoreButton()).toBeFalse();
  });

  it('resizing the window should trigger the onResize listener to run', async () => {
    const { instance } = await shallow.render({ bind: { book: testBook }});
    const spy = spyOn(instance, 'onResize');
    window.dispatchEvent(new Event('resize'));
    expect(spy).toHaveBeenCalled();
  });
});
