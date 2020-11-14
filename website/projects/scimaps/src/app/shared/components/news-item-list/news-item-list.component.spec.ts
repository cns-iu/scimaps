import { Shallow } from 'shallow-render';

import { NewsItemListComponent } from './news-item-list.component';
import { NewsItem } from '../news-item/news-item.model';
import { NewsItemListModule } from './news-item-list.module';

const testItems: NewsItem[] = [
  {
    title: 'Title 6',
    date: new Date(2000, 1, 1),
    publication: 'A',
    institution: 'test institution',
    thumbnail: 'test thumb',
    pdfLink: 'link'
  },
  {
    title: 'Title 4',
    date: new Date(2001, 1, 1),
    publication: 'B',
    institution: 'test institution',
    thumbnail: 'test thumb',
    pdfLink: 'link'
  },
  {
    title: 'Title 5',
    date: new Date(2002, 1, 1),
    publication: 'E',
    institution: 'test institution',
    thumbnail: 'test thumb',
    pdfLink: 'link'
  },
  {
    title: 'Title 2',
    date: new Date(2003, 1, 1),
    publication: 'F',
    institution: 'test institution',
    thumbnail: 'test thumb',
    pdfLink: 'link'
  },
  {
    title: 'Title 1',
    date: new Date(2004, 1, 1),
    publication: 'D',
    institution: 'test institution',
    thumbnail: 'test thumb',
    pdfLink: 'link'
  },
  {
    title: 'Title 3',
    date: new Date(2005, 1, 1),
    publication: 'C',
    institution: 'test institution',
    thumbnail: 'test thumb',
    pdfLink: 'link'
  }
];

describe('NewsItemListComponent', () => {
  let shallow: Shallow<NewsItemListComponent>;

  beforeEach(async () => {
    shallow = new Shallow(NewsItemListComponent, NewsItemListModule);
  });

  it('sorts displayed news items by title', async () => {
    const { instance } = await shallow.render({ bind: { newsItems: testItems } });
    instance.sort('title');
    expect(instance.displayedNewsItems[2].title).toBe('Title 4');
  });

  it('sorts displayed news items by publication', async () => {
    const { instance } = await shallow.render({ bind: { newsItems: testItems } });
    instance.sort('publication');
    expect(instance.displayedNewsItems[2].publication).toBe('D');
  });

  it('sorts displayed news items by date', async () => {
    const { instance } = await shallow.render({ bind: { newsItems: testItems } });
    instance.sort('date');
    expect(instance.displayedNewsItems[2].date).toEqual(new Date(2002, 1, 1));
  });
});
