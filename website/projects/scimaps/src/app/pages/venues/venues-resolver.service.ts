import { Injectable } from '@angular/core';
import { Params, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { getSegmentedDate, isHttp } from '../../constants/utils';
import { ContentService, toSlug } from '../../shared/services/content.service';

export interface Venue {
  slug?: string,
  dateStart: string;
  dateEnd: string;
  title: string;
  venue: string;
  organizer: string;
  credit: string;
  city: string;
  state: string;
  country: string;
  pdfLink: string;
  venueImages: { sm: string; lg: string }[];
}

@Injectable({
  providedIn: 'root',
})
export class VenuesResolverService implements Resolve<Venue[]> {
  directory = 'assets/content/venues';
  constructor(private contentService: ContentService) {}

  // Used to get full path of resources.
  updatePaths(venue: Venue): Venue {
    const [year, month, date] = getSegmentedDate(venue.dateStart);
    const slug = toSlug(venue.title);
    if (venue.pdfLink && !isHttp(venue.pdfLink)) {
      venue.pdfLink = `${this.directory}/${year}/${month}-${date}/${slug}/${venue.pdfLink}`;
    }
    if (
      venue.venueImages &&
      Array.isArray(venue.venueImages) &&
      venue.venueImages.length
    ) {
      venue.venueImages = venue.venueImages.map((image) => {
        return {
          sm: `${this.directory}/${year}/${month}-${date}/${slug}/${image.sm}`,
          lg: `${this.directory}/${year}/${month}-${date}/${slug}/${image.lg}`,
        };
      });
    }
    return venue;
  }

  toVenue(item: Params): Venue {
    return {
      slug: toSlug(item.title),
      dateStart: item.dateStart,
      dateEnd: item.dateEnd,
      title: item.title,
      venue: item.venue,
      organizer: item.organizer,
      credit: item.credit,
      city: item.city,
      state: item.state,
      country: item.country,
      pdfLink: item.pdfLink,
      venueImages: item.venueImages,
    };
  }

  resolve(): Observable<Venue[]> {
    return this.contentService.getIndex<Venue[]>('venues').pipe(
      take(1),
      map((venues: Params[]) => {
        return venues.map((item: Params) => {
          const venue = this.toVenue(item);
          return this.updatePaths(venue);
        });
      })
    );
  }
}
