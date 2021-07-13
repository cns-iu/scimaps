import { TestBed } from '@angular/core/testing';

import { VenuesBodyResolverService } from './venues-body-resolver.service';

describe('VenuesBodyResolverService', () => {
  let service: VenuesBodyResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VenuesBodyResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
