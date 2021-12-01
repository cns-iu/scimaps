import { fakeAsync, TestBed } from '@angular/core/testing';
import { Params } from '@angular/router';
import { of } from 'rxjs';
import { getBlog } from '../../shared/components/blog-tile/blog-tile.component.spec';
import { ContentService } from '../../shared/services/content.service';
import { BlogResolverService } from '../blogs/blog-resolver.service';
import { MakerVideoResolverService } from '../maker-videos/maker-video-resolver.service';
import { getMakerVideo } from '../maker-videos/maker-videos-resolver.service';
import { LearningCenterBodyResolverService } from './learning-center-body-resolver.service';

describe('LearningCenterBodyResolverService', () => {
  let service: LearningCenterBodyResolverService;
  let contentService: Params;
  let blogResolver: Params;
  let videoResolver: Params;

  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', ['getIndex', 'getContent']);
    const blogResolverSpy = jasmine.createSpyObj('BlogResolverService', ['getResult']);
    const videoResolverSpy = jasmine.createSpyObj('MakerVideoResolverService', ['getResult']);

    TestBed.configureTestingModule({
      providers: [
        LearningCenterBodyResolverService,
        { provide: ContentService, useValue: contentServiceSpy },
        { provide: BlogResolverService, useValue: blogResolverSpy },
        { provide: MakerVideoResolverService, useValue: videoResolverSpy }
      ],
    });
    service = TestBed.inject(LearningCenterBodyResolverService);
    contentService = TestBed.inject(ContentService);
    blogResolver = TestBed.inject(BlogResolverService);
    videoResolver = TestBed.inject(MakerVideoResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should process featured blog', fakeAsync(() => {
    const blog = getBlog(1)[0];
    const body = {
      featured: {
        type: 'blog',
        'featured-blog-slug': `${blog.slug}/readme`
      },
    };
    (contentService.getContent as jasmine.Spy).and.returnValue(
      of(body)
    );
    (blogResolver.getResult as jasmine.Spy).withArgs(`blog/${blog.slug}/readme`).and.returnValue(
      of(blog)
    );
    const data = service.resolve();

    data.subscribe(response => {
      expect(response).toBeTruthy();
      expect(response.featured.type).toEqual('blog');
      expect(response.featured['featured-blog-slug']).toEqual(`${blog.slug}/readme`);
      expect(response.featuredBlog).toBeTruthy();
    });
    expect(contentService.getContent).toHaveBeenCalledTimes(1);
    expect(blogResolver.getResult).toHaveBeenCalledTimes(1);
  }));

  it('should process featured video', fakeAsync(() => {
    const video = getMakerVideo(1)[0];
    const body = {
      featured: {
        type: 'video',
        'featured-video-slug': `${video.slug}/readme`
      }
    };
    (contentService.getContent as jasmine.Spy).and.returnValue(
      of(body)
    );
    (videoResolver.getResult as jasmine.Spy).withArgs(`maker-videos/${video.slug}/readme`).and.returnValue(
      of(video)
    );
    const data = service.resolve();

    data.subscribe(response => {
      expect(response).toBeTruthy();
      expect(response.featured.type).toEqual('video');
      expect(response.featured['featured-video-slug']).toEqual(`${video.slug}/readme`);
      expect(response.featuredVideo).toBeTruthy();
    });
    expect(contentService.getContent).toHaveBeenCalledTimes(1);
    expect(videoResolver.getResult).toHaveBeenCalledTimes(1);
  }));


  it('should process featured video', fakeAsync(() => {
    const body = {};
    (contentService.getContent as jasmine.Spy).and.returnValue(
      of(body)
    );
    const data = service.resolve();
    data.subscribe(response => {
      expect(response).toBeTruthy();
    });
    expect(contentService.getContent).toHaveBeenCalledTimes(1);
  }));
});
