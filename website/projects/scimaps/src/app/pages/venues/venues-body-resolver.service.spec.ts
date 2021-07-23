import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ContentService } from '../../shared/services/content.service';
import { VenuesBody, VenuesBodyResolverService } from './venues-body-resolver.service';

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

  it('should be created', fakeAsync(() => {
    const venuesBody: VenuesBody = {
      accordianHeader: 'Header',
      accordianContent: 'Content'
    };
    (contentService.getContent as jasmine.Spy).withArgs(service.mdPath).and.returnValue(
      of(venuesBody)
    );

    const data = service.resolve();
    flushMicrotasks();
    expect(contentService.getContent).toHaveBeenCalledTimes(1);
    expect(contentService.getContent).toHaveBeenCalledWith(service.mdPath);
    data.subscribe((response) => {
      expect(response.accordianHeader).toEqual(venuesBody.accordianHeader);
      expect(response.accordianContent).toEqual(venuesBody.accordianContent);
    });
  }));
});
