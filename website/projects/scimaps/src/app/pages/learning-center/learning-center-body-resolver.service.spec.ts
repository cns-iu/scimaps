import { TestBed } from '@angular/core/testing';

import { LearningCenterBodyResolverService } from './learning-center-body-resolver.service';

describe('LearningCenterBodyResolverService', () => {
  let service: LearningCenterBodyResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearningCenterBodyResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
