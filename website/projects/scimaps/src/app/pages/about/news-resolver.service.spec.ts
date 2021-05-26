import { TestBed } from '@angular/core/testing';

import { NewsResolverService } from './news-resolver.service';

describe('NewsResolverService', () => {
  let service: NewsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
