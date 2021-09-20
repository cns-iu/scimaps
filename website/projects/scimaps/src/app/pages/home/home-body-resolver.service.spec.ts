import { TestBed } from '@angular/core/testing';

import { HomeBodyResolverService } from './home-body-resolver.service';

describe('HomeResolverService', () => {
  let service: HomeBodyResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeBodyResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
