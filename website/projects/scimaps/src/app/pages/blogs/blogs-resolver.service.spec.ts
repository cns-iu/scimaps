import { fakeAsync, TestBed } from '@angular/core/testing';
import { Params } from '@angular/router';
import { of } from 'rxjs';
import { getBlog } from '../../shared/components/blog-tile/blog-tile.component.spec';
import { ContentService } from '../../shared/services/content.service';

import { BlogsResolverService } from './blogs-resolver.service';

describe('BlogsResolverService', () => {
  let service: BlogsResolverService;
  let contentService: Params;
  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', ['getIndex', 'getContent']);
    TestBed.configureTestingModule({
      providers: [
        BlogsResolverService,
        { provide: ContentService, useValue: contentServiceSpy }]
    });
    service = TestBed.inject(BlogsResolverService);
    contentService = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', fakeAsync(() => {
    (contentService.getIndex as jasmine.Spy).and.returnValue(
      of(getBlog(2))
    )
    const data = service.resolve();
    data.subscribe(response => {
      expect(service).toBeTruthy();
    });
  }));

});
