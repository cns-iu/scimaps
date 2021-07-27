import { TestBed } from '@angular/core/testing';

import { LearningMaterialResolverService } from './learning-material-resolver.service';

describe('LearningMaterialResolverService', () => {
  let service: LearningMaterialResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearningMaterialResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
