import { TestBed } from '@angular/core/testing';
import { ContentService } from '../../shared/services/content.service';

import { VenueResolverService } from './venue-resolver.service';

describe('VenueResolverService', () => {
  let service: VenueResolverService;
  let contentService: ContentService;
  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', ['getContent']);
    TestBed.configureTestingModule({
      providers: [
        VenueResolverService,
        {provide: ContentService, useValue: contentServiceSpy}
      ]
    });
    service = TestBed.inject(VenueResolverService);
    contentService = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
