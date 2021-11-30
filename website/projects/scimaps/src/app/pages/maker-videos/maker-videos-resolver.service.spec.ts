import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ContentService } from '../../shared/services/content.service';
import { getMakerVideo, MakerVideosResolverService } from './maker-videos-resolver.service';


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
    contentService = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('makes expected calls', () => {
    (contentService.getIndex as jasmine.Spy).and.returnValue(of([]));
    const route = {data: {videosCount: 4}};
    service.resolve(route);
    expect(contentService.getIndex).toHaveBeenCalled();
    expect(contentService.getIndex).toHaveBeenCalledTimes(1);
  });
});
