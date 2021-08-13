import { TestBed } from '@angular/core/testing';

import { VenueResolverService } from './venue-resolver.service';

describe('VenueResolverService', () => {
  let service: VenueResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VenueResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
