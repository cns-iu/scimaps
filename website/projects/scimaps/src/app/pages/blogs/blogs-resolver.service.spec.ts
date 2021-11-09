import { TestBed } from '@angular/core/testing';

import { BlogsResolverService } from './blogs-resolver.service';

describe('BlogsResolverService', () => {
  let service: BlogsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
