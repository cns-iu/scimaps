import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ContentService } from '../../shared/services/content.service';

import { MakerVideosBodyResolverService } from './maker-videos-body-resolver.service';

describe('MakerVideosBodyResolverService', () => {
  let service: MakerVideosBodyResolverService;
  let contentService: ContentService;
  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', [
      'getContent',
    ]);
    TestBed.configureTestingModule({
      providers: [
        MakerVideosBodyResolverService,
        { provide: ContentService, useValue: contentServiceSpy },
      ]
    });
    service = TestBed.inject(MakerVideosBodyResolverService);
    contentService = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('makes expected calls', () => {
    (contentService.getContent as jasmine.Spy).and.returnValue(of([]));
    service.resolve();
    expect(contentService.getContent).toHaveBeenCalled();
    expect(contentService.getContent).toHaveBeenCalledTimes(1);
  });
});
