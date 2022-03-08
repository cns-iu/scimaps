import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { ContentService } from '../../shared/services/content.service';

import { SubmissionsBodyResolverService } from './submissions-body-resolver.service';

describe('SubmissionsBodyResolverService', () => {
  let service: SubmissionsBodyResolverService;
  let contentService: ContentService;
  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', ['getContent']);
    const routerStub = () => ({});
    TestBed.configureTestingModule({
      providers: [
        SubmissionsBodyResolverService,
        { provide: Router, useFactory: routerStub },
        { provide: ContentService, useValue: contentServiceSpy }
      ]
    });
    service = TestBed.inject(SubmissionsBodyResolverService);
    contentService = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be created', () => {
    (contentService.getContent as jasmine.Spy).and.returnValue(of({}));
    service.resolve();
    expect(contentService.getContent).toHaveBeenCalled();
  });
});
