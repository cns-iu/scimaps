import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { Params } from '@angular/router';
import { of } from 'rxjs';
import { ContentService } from '../../shared/services/content.service';
import { LearningCenterBodyResolverService } from './learning-center-body-resolver.service';


describe('LearningCenterBodyResolverService', () => {
  let service: LearningCenterBodyResolverService;
  let contentService: Params;
  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', ['getIndex', 'getContent']);
    TestBed.configureTestingModule({
      providers: [LearningCenterBodyResolverService,
        { provide: ContentService, useValue: contentServiceSpy }],
    });
    service = TestBed.inject(LearningCenterBodyResolverService);
    contentService = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('should process featured blog', fakeAsync(() => {
    const testResponse = {
      featured: {
        type: 'blog',
        'featured-blog-slug': 'slug1/readme'
      }
    };
    (contentService.getContent as jasmine.Spy).and.returnValue(
      of(testResponse)
    );
    const data = service.resolve();
    flushMicrotasks();
    data.subscribe(response => {
      expect(response.featured).toBeTruthy();
    });
  }));

  xit('should process featured video', fakeAsync(() => {
    const testResponse = {
      featured: {
        type: 'video',
        'featured-video-slug': 'slug2/readme'
      }
    };
    (contentService.getContent as jasmine.Spy).and.returnValue(
      of(testResponse)
    );
    const data = service.resolve();
    flushMicrotasks();
    data.subscribe(response => {
      expect(response.featured).toBeTruthy();
    });
  }));
});
