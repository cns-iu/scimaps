import { TestBed } from '@angular/core/testing';
import { ContentService } from '../../shared/services/content.service';

import { VenuesBodyResolverService } from './venues-body-resolver.service';

describe('VenuesBodyResolverService', () => {
  let service: VenuesBodyResolverService;
  let contentService: ContentService;
  
  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', ['getContent']);
    TestBed.configureTestingModule({
      providers: [
        VenuesBodyResolverService,
        {provide: ContentService, useValue: contentServiceSpy}
      ]
    });
    service = TestBed.inject(VenuesBodyResolverService);
    contentService = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
