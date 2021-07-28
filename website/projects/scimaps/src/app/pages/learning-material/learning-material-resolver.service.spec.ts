import { TestBed } from '@angular/core/testing';
import { Params } from '@angular/router';
import { ContentService } from '../../shared/services/content.service';

import { LearningMaterialResolverService } from './learning-material-resolver.service';

describe('LearningMaterialResolverService', () => {
  let service: LearningMaterialResolverService;
  let contentService: Params;
  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', ['getIndex']);
    TestBed.configureTestingModule({
      providers: [
        LearningMaterialResolverService,
        {provide: ContentService, useValue: contentServiceSpy}
      ]
    });
    service = TestBed.inject(LearningMaterialResolverService);
    contentService = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
