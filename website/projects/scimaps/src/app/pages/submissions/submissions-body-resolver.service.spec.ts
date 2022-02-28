import { TestBed } from '@angular/core/testing';

import { SubmissionsBodyResolverService } from './submissions-body-resolver.service';

describe('SubmissionsBodyResolverService', () => {
  let service: SubmissionsBodyResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmissionsBodyResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
