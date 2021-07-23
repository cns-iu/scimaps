import { TestBed } from '@angular/core/testing';
import { Params } from '@angular/router';
import { ContentService } from '../../shared/services/content.service';

import { HostingBodyResolverService } from './hosting-body-resolver.service';

describe('HostingBodyResolverService', () => {
  let service: HostingBodyResolverService;
  let contentService: Params;
  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', ['getContent']);
    TestBed.configureTestingModule({
      providers: [
        HostingBodyResolverService,
        {provide: ContentService, useValue: contentServiceSpy}
      ]
    });
    service = TestBed.inject(HostingBodyResolverService);
    contentService = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
