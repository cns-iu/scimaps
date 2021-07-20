import { TestBed } from '@angular/core/testing';

import { GalleriesResolverService } from './galleries-resolver.service';

describe('GalleriesResolverService', () => {
  let service: GalleriesResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalleriesResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
