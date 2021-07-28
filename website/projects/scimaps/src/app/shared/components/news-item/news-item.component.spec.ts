import { Shallow } from 'shallow-render';

import { NewsItemComponent } from './news-item.component';
import { NewsItem } from './news-item.model';
import { NewsItemModule } from './news-item.module';

const testItem: NewsItem = {
  title: 'test title',
  date: new Date(2002, 1, 1),
  publication: 'test publication',
  institution: 'test institution',
  thumbnail: 'test thumbnail',
  pdfLink: 'test link'
};

describe('NewsItemComponent', () => {
  let shallow: Shallow<NewsItemComponent>;
  function itHasElementContent(selector: string, content: string): void {
    it(`has the correct content in ${selector}`, async () => {
      const { find } = await shallow.render({ bind: { item: testItem } });
      const el = find(selector).nativeElement as Element;
      console.log(el.innerHTML);
      expect(el.innerHTML).toContain(content);
    });
  }

  beforeEach(async () => {
    shallow = new Shallow(NewsItemComponent, NewsItemModule);
  });
  itHasElementContent('.date', 'Feb 1, 2002');
  itHasElementContent('.identifier', 'test publication at test institution');
});
