import { TestBed } from '@angular/core/testing';
import { ContentService } from '../../shared/services/content.service';

import { BlogsResolverService } from './blogs-resolver.service';

describe('BlogsResolverService', () => {
  let service: BlogsResolverService;

  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', ['getIndex', 'getContent']);
    TestBed.configureTestingModule({
      providers: [
        BlogsResolverService,
        { provide: ContentService, useValue: contentServiceSpy }]
    });
    service = TestBed.inject(BlogsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
