import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { getSegmentedDate } from '../../constants/utils';
import { ContentService, toSlug } from '../../shared/services/content.service';

import { Venue, VenuesResolverService } from './venues-resolver.service';

export const getVenues = (n: number): Venue[] => {
  const result: Venue[] = [];
  for (let i = 0; i < n; i++) {
    result.push({
      dateStart: '2012-02-02',
      dateEnd: '',
      title: `title-${i}`,
      venue: `venue-${i}`,
      venueImages: [{
        sm: `image${i}.sm.jpg`,
        lg: `image${i}.lg.jpg`
      }],
      organizer: `org${i}`,
      credit: `credit${i}`,
      city: `city${i}`,
      state: `state${i}`,
      country: `country${i}`,
      pdfLink: `pdfLink${i}`
    });
  }
  return result;
};

describe('VenuesResolverService', () => {
  let service: VenuesResolverService;
  let contentService: ContentService;
  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', ['getIndex']);
    TestBed.configureTestingModule({
      providers: [
        VenuesResolverService,
        {provide: ContentService, useValue: contentServiceSpy}
      ]
    });
    service = TestBed.inject(VenuesResolverService);
    contentService = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call contentService.getIndex exatly once', () => {
    const venues = getVenues(10);
    (contentService.getIndex as jasmine.Spy).withArgs('venues').and.returnValue(of([venues]));
    service.resolve();
    expect(contentService.getIndex).toHaveBeenCalledTimes(1);
    expect(contentService.getIndex).toHaveBeenCalledWith('venues');
  });

  it('should call contentService.getIndex exatly once', () => {
    const venue = getVenues(1)[0];
    const newVenue = service.updatePaths(JSON.parse(JSON.stringify(venue)));

    const [year, month, date] = getSegmentedDate(venue.dateStart);
    const slug = toSlug(venue.title);

    expect(newVenue.pdfLink).toEqual(`${service.directory}/${year}/${month}-${date}/${slug}/${venue.pdfLink}`);
    expect(newVenue.venueImages[0].sm).toEqual(`${service.directory}/${year}/${month}-${date}/${slug}/${venue.venueImages[0].sm}`);
  });
});
