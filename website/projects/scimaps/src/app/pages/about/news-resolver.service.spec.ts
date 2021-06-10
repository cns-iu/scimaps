import { TestBed } from '@angular/core/testing';
import { Params } from '@angular/router';
import { of } from 'rxjs';
import { NewsItem } from '../../shared/components/news-item/news-item.model';
import { ContentService, toSlug } from '../../shared/services/content.service';

import { NewsResolverService } from './news-resolver.service';

function getNewsItems(
  numberOfNewsItems: number,
  date: string = '2021-06-03'
): NewsItem[] {
  const newsItems: NewsItem[] = [];
  for (let i = 0; i <= numberOfNewsItems; i++) {
    newsItems.push({
      date: new Date(date),
      title: `Title ${i}`,
      publication: `Pub ${i}`,
      pdfLink: `pdfLink/${i}`,
      thumbnail: `imageLink/${i}`,
      sourceUrl: `sourceUrl/${i}`,
      institution: `institution ${i}`,
    });
  }
  return newsItems;
}
const testItem = {
  title: 'test title',
  date: new Date('2021-06-03').toString(),
  source: 'test source',
  sourceUrl: 'sourceUrl',
  image: 'test image',
  pdfLink: 'test pdf',
};

describe('NewsResolverService', () => {
  let service: NewsResolverService;
  let contentService: Params;
  const testNewsItems: NewsItem[] = getNewsItems(10);

  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', [
      'getIndex',
    ]);
    TestBed.configureTestingModule({
      providers: [
        NewsResolverService,
        { provide: ContentService, useValue: contentServiceSpy },
      ],
    });
    service = TestBed.inject(NewsResolverService);
    contentService = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should give correct relative image path', () => {
    const newsItem = testNewsItems[0];
    const newImagePath = service.getSourceLink(newsItem);
    const slug = toSlug(newsItem.title);
    expect(newImagePath).toEqual(
      `assets/${service.directory}/2021/06-03/${slug}/${newsItem.thumbnail}`
    );
  });

  it('should give correct relative pdf path', () => {
    const newsItem = testNewsItems[0];
    const newImagePath = service.getSourceLink(newsItem, 'pdfLink');
    const slug = toSlug(newsItem.title);
    expect(newImagePath).toEqual(
      `assets/${service.directory}/2021/06-03/${slug}/${newsItem.pdfLink}`
    );
  });

  it('should should call contentService.getIndex once', () => {
    (contentService.getIndex as jasmine.Spy).and.returnValue(of([testItem]));
    service.resolve();
    expect(contentService.getIndex).toHaveBeenCalledTimes(1);
    expect(contentService.getIndex).toHaveBeenCalledWith('news');
  });

  it('should map data correctly', async (done) => {
    (contentService.getIndex as jasmine.Spy).and.returnValue(of([testItem]));
    const result = service.resolve();
    result.subscribe((newsItems: NewsItem[]) => {
      const newsItem = newsItems[0];
      expect(newsItem.title).toEqual(testItem.title);
      expect(newsItem.date.toString()).toEqual(testItem.date);
      expect(newsItem.publication).toEqual(testItem.source);
      expect(newsItem.sourceUrl).toEqual(testItem.sourceUrl);
      expect(newsItem.pdfLink.includes(testItem.pdfLink));
      expect(newsItem.thumbnail.includes(testItem.image));
      done();
    });
  });
  
  it('When pdfLink is httpURL', async (done) => {
    testItem.pdfLink = 'https://abc.com/sample.pdf';
    (contentService.getIndex as jasmine.Spy).and.returnValue(of([testItem]));
    const result = service.resolve();
    result.subscribe((newsItems: NewsItem[]) => {
      const newsItem = newsItems[0];
      expect(newsItem.pdfLink).toEqual(testItem.pdfLink);
      done();
    });
  });
});
