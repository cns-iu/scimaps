import { TestBed } from '@angular/core/testing';

import { SubmissionResolverService } from './submission-resolver.service';

describe('SubmissionResolverService', () => {
  let service: SubmissionResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmissionResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
