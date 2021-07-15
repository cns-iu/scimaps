import { Injectable } from '@angular/core';
import { Params, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { isHttp } from '../../constants/utils';
import { ContentService, toSlug } from '../../shared/services/content.service';

export interface Venue {
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
  directory = 'content/venues';
  constructor(private contentService: ContentService) {}

  // Used to get full path of resources.
  updatePaths(venue: Venue): Venue {
    const fullDate = new Date(venue.dateStart);
    const year = fullDate.getFullYear();
    const date = ('0' + fullDate.getUTCDate()).slice(-2);
    const month = ('0' + (fullDate.getUTCMonth() + 1)).slice(-2);
    const slug = toSlug(venue.title);

    if (venue.pdfLink && !isHttp(venue.pdfLink)) {
      venue.pdfLink = `assets/${this.directory}/${year}/${month}-${date}/${slug}/${venue.pdfLink}`;
    }
    if (
      venue.venueImages &&
      Array.isArray(venue.venueImages) &&
      venue.venueImages.length
    ) {
      venue.venueImages = venue.venueImages.map((image) => {
        return {
          sm: `assets/${this.directory}/${year}/${month}-${date}/${slug}/${image.sm}`,
          lg: `assets/${this.directory}/${year}/${month}-${date}/${slug}/${image.lg}`,
        };
      });
    }
    return venue;
  }

  toVenue(item: Params): Venue {
    return {
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

  resolve(): Venue[] | Observable<Venue[]> | Promise<Venue[]> {
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
