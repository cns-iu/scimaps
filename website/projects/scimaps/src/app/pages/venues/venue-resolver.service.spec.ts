import { TestBed } from '@angular/core/testing';
import { Params } from '@angular/router';
import { of } from 'rxjs';
import { ContentService } from '../../shared/services/content.service';
import { VenueResolverService } from './venue-resolver.service';
import { getVenues } from './venues-resolver.service.spec';


describe('VenueResolverService', () => {
  let service: VenueResolverService;
  let contentService: ContentService;
  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', ['getContent']);
    TestBed.configureTestingModule({
      providers: [
        VenueResolverService,
        {provide: ContentService, useValue: contentServiceSpy}
      ]
    });
    service = TestBed.inject(VenueResolverService);
    contentService = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should make correct call', () => {
    const venue = getVenues(1)[0];
    const route: Params = {params: {slug: 'slug', year: 'year', month: 'month'}};
    (contentService.getContent as jasmine.Spy).and.returnValue(
      of({})
    );
    service.resolve(route);
    service.updatePaths(venue);
    expect(contentService.getContent).toHaveBeenCalled();
  });
});
