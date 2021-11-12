import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, Params } from '@angular/router';
import { of } from 'rxjs';
import { getSegmentedDate } from '../../constants/utils';
import { getBlog } from '../../shared/components/blog-tile/blog-tile.component.spec';
import { ContentService } from '../../shared/services/content.service';

import { BlogResolverService } from './blog-resolver.service';

describe('BlogResolverService', () => {
  let service: BlogResolverService;
  let contentService: Params;
  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', ['getIndex', 'getContent']);
    TestBed.configureTestingModule({
      providers: [BlogResolverService,
        { provide: ContentService, useValue: contentServiceSpy }]
    });
    service = TestBed.inject(BlogResolverService);
    contentService = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    service.directory = 'assets/content/blog';
    const [testBlog] = getBlog(1);
    const initial = testBlog.blogImages;
    const [year, month, date] = getSegmentedDate(testBlog.date);
    const expacted = initial.map(item => {
      return {
        sm: `${service.directory}/${year}/${month}-${date}/${testBlog.slug}/${item.sm}`,
        lg: `${service.directory}/${year}/${month}-${date}/${testBlog.slug}/${item.lg}`
      }
    });
    const results = service.getBlogImageSource(testBlog);
    results.forEach((result, index) => {
      expect(result.sm).toEqual(expacted[index].sm);
      expect(result.lg).toEqual(expacted[index].lg);
    });
  });

  it('should be created', () => {
    const [testBlog] = getBlog(1);
    (contentService.getContent as jasmine.Spy).and.returnValue(
      of({...testBlog})
    )
    const route = {
      params: {
        year: '2021',
        month: '08-01',
        slug: 'slug1'
      }
    };
    service.resolve(route);
  });
});
