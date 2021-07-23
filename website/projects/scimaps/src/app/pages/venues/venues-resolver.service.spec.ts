import { TestBed } from '@angular/core/testing';
import { ContentService } from '../../shared/services/content.service';

import { VenuesResolverService } from './venues-resolver.service';

describe('VenuesResolverService', () => {
  let service: VenuesResolverService;
  let contentService: ContentService
  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', ['getContent']);
    TestBed.configureTestingModule({
      providers: [
        VenuesResolverService,
        {provide: ContentService, useValue: contentServiceSpy}
      ]
    });
    service = TestBed.inject(VenuesResolverService);
    contentService = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
