import { TestBed } from '@angular/core/testing';
import { ContentService } from '../../shared/services/content.service';

import { MakerVideoResolverService } from './maker-video-resolver.service';

describe('MakerVideoResolverService', () => {
  let service: MakerVideoResolverService;
  let contentService: ContentService;
  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', [
      'getContent',
    ]);
    TestBed.configureTestingModule({
      providers: [
        MakerVideoResolverService,
        { provide: ContentService, useValue: contentServiceSpy },
      ]
    });
    service = TestBed.inject(MakerVideoResolverService);
    contentService = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
