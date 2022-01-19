import { fakeAsync, TestBed } from '@angular/core/testing';
import { Params } from '@angular/router';
import { of } from 'rxjs';
import { ContentService, toSlug } from '../../shared/services/content.service';
import { getVideoImageSource, MakerVideoResolverService, toMakerVideo } from './maker-video-resolver.service';
import { getMakerVideo, MakerVideo } from './maker-videos-resolver.service';


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
  it('getVideoImageSource - should correctly map URL', () => {
    const directory = 'sample_directory_path';
    const [video] = getMakerVideo(1);
    video.image = 'imageURL';
    const expected = `${directory}/${video.slug}/${video.image}`;
    const actual = getVideoImageSource(video, directory);
    expect(expected).toEqual(actual);
  });
  it('toMakerVideo - should correctly build object', () => {
    const [video] = getMakerVideo(1);
    const directory = 'root';
    const testVideo = video as Params;
    delete testVideo.slug;
    testVideo.image = 'imagePath';
    const actual: MakerVideo = toMakerVideo(testVideo, directory);
    expect(actual.slug).toEqual(toSlug(testVideo.title));
  });

  it('Resolve - returns correct video', fakeAsync(() => {
    const [video] = getMakerVideo(1);
    const route = { params: { slug: video.slug } };
    (contentService.getContent as jasmine.Spy).and.returnValue(
      of({...video})
    );
    const result$ = service.resolve(route);
    result$.subscribe((response) => {
      expect(response).toBeTruthy();
      expect(response.slug).toEqual(video.slug);
    });
  }));
});
