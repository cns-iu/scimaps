import { TestBed } from '@angular/core/testing';

import { VenuesResolverService } from './venues-resolver.service';

describe('VenuesResolverService', () => {
  let service: VenuesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VenuesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
