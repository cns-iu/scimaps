import { Shallow } from 'shallow-render';
import { NewsItem } from '../news-item/news-item.model';
import { NewsTableComponent } from './news-table.component';
import { NewsTableModule } from './news-table.module';

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
describe('NewsTableComponent', () => {
  let shallow: Shallow<NewsTableComponent>;

  beforeEach(async () => {
    shallow = new Shallow(NewsTableComponent, NewsTableModule);
  });

  it('should create', () => {
    expect(shallow).toBeTruthy();
  });

  it('should have right data', async () => {
    const { instance } = await shallow.render({ bind: { data: testItems } });
    expect(instance.data.length).toEqual(testItems.length);
  });
  
});
