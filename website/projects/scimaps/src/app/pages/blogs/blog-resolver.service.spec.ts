import { TestBed } from '@angular/core/testing';
import { ContentService } from '../../shared/services/content.service';

import { BlogResolverService } from './blog-resolver.service';

describe('BlogResolverService', () => {
  let service: BlogResolverService;

  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', ['getIndex', 'getContent']);
    TestBed.configureTestingModule({
      providers: [BlogResolverService,
        { provide: ContentService, useValue: contentServiceSpy }]
    });
    service = TestBed.inject(BlogResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
