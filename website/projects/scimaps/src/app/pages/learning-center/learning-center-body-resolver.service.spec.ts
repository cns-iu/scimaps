import { TestBed } from '@angular/core/testing';
import { Params } from '@angular/router';
import { ContentService } from '../../shared/services/content.service';

import { LearningCenterBodyResolverService } from './learning-center-body-resolver.service';

describe('LearningCenterBodyResolverService', () => {
  let service: LearningCenterBodyResolverService;
  let contentService: Params;
  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', ['getIndex', 'getContent']);
    TestBed.configureTestingModule({
      providers: [LearningCenterBodyResolverService,
        { provide: ContentService, useValue: contentServiceSpy }],
    });
    service = TestBed.inject(LearningCenterBodyResolverService);
    contentService = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
