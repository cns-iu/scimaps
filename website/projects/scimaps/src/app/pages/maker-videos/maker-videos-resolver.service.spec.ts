import { TestBed } from '@angular/core/testing';
import { ContentService } from '../../shared/services/content.service';

import { MakerVideosResolverService } from './maker-videos-resolver.service';

describe('MakerVideosResolverService', () => {
  let service: MakerVideosResolverService;
  let contentService: ContentService;
  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', [
      'getIndex',
    ]);
    TestBed.configureTestingModule({
      providers: [
        MakerVideosResolverService,
        { provide: ContentService, useValue: contentServiceSpy }
      ]
    });
    service = TestBed.inject(MakerVideosResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
