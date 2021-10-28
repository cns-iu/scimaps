import { TestBed } from '@angular/core/testing';

import { BlogResolverService } from './blog-resolver.service';

describe('BlogResolverService', () => {
  let service: BlogResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
