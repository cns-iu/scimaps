import { TestBed } from '@angular/core/testing';
import { ContentService } from '../../shared/services/content.service';

import { SubmissionResolverService } from './submission-resolver.service';

describe('SubmissionResolverService', () => {
  let service: SubmissionResolverService;
  let contentService: ContentService;

  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', [
      'getIndex',
    ]);
    
    TestBed.configureTestingModule({
      providers: [
        SubmissionResolverService,
        { provide: ContentService, useValue: contentServiceSpy },
      ],
    });
    service = TestBed.inject(SubmissionResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
