import { Shallow } from 'shallow-render';

import { NewsItemComponent } from './news-item.component';
import { NewsItemModule } from './news-item.module';
import { NewsItem } from './news-item.model';


const testItem: NewsItem = {
  title: 'test title',
  date: 'test date',
  source: 'test source',
  institution: 'test institution',
  thumbnail: 'test thumbnail',
  pdfLink: 'test link'
};

describe('NewsItemComponent', () => {
  let shallow: Shallow<NewsItemComponent>;

  beforeEach(async () => {
    shallow = new Shallow(NewsItemComponent, NewsItemModule);
  });

  it('should display the date', async () => {
    const { find } = await shallow.render({ bind: { item: testItem }});
    const dateElement = find('.date').nativeElement as Element;
    expect(dateElement.innerHTML).toEqual('test date');
  });

  it('should display the title', async () => {
    const { find } = await shallow.render({ bind: { item: testItem }});
    const dateElement = find('.title').nativeElement as Element;
    expect(dateElement.innerHTML).toEqual('test title');
  });

  it('should display the article source', async () => {
    const { find } = await shallow.render({ bind: { item: testItem }});
    const dateElement = find('.identifier').nativeElement as Element;
    expect(dateElement.innerHTML).toEqual('test source at test institution');
  });
});
