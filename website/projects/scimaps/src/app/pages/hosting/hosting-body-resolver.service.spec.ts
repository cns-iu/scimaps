import { TestBed } from '@angular/core/testing';

import { HostingBodyResolverService } from './hosting-body-resolver.service';

describe('HostingBodyResolver.Service.TsService', () => {
  let service: HostingBodyResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HostingBodyResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
