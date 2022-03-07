import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ContentService } from '../../shared/services/content.service';
import { discoverItem } from '../macroscopes/macroscopes.component.spec';

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
    contentService = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call to contentService.getIndex', () => {
    const testItem = {...discoverItem, iteration: 1}
    expect(service).toBeTruthy();
    (contentService.getIndex as jasmine.Spy).withArgs('app-submissions').and.returnValue(of([
      testItem
    ]));
    service.resolve({params: {iteration: 1}});
    expect(contentService.getIndex).toHaveBeenCalled();
    expect(contentService.getIndex).toHaveBeenCalledTimes(1);
  });

  
});
