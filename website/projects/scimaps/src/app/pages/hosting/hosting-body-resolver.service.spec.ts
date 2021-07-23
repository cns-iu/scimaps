import { TestBed } from '@angular/core/testing';

import { HostingBodyResolverService } from './hosting-body-resolver.service';

describe('HostingBodyResolverService', () => {
  let service: HostingBodyResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HostingBodyResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
