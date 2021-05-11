import { TestBed } from '@angular/core/testing';
import { AboutBodyResolverService } from './about-body-resolver.service';
import { ContentService } from '../../shared/services/content.service';
import { of } from 'rxjs';
import { Params } from '@angular/router';

describe('AboutBodyResolverService', () => {
  let service: AboutBodyResolverService;
  let contentService: Params;
  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', ['getContent']);
    TestBed.configureTestingModule({
      providers: [
        AboutBodyResolverService,
        {provide: ContentService, useValue: contentServiceSpy}
      ]
    });
    service = TestBed.inject(AboutBodyResolverService);
    contentService = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call contentService.getContent once', () => {
    (contentService.getContent as jasmine.Spy).and.returnValue(
      of({
        body: {
          curatorsDescription: 'Sample curator description',
          advisoryBoardDescription: 'Sample advisory board description',
          ambassadorsDescription: 'Sample ambassadors description'
        }
      })
    );
    service.resolve();
    expect(contentService.getContent).toHaveBeenCalledTimes(1);
    expect(contentService.getContent).toHaveBeenCalledWith('site/about.md');
  });
});
