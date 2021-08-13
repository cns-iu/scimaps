import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { getSegmentedDate } from '../../constants/utils';
import { ContentService, toSlug } from '../../shared/services/content.service';
import { Venue } from './venues-resolver.service';

@Injectable({
  providedIn: 'root'
})
export class VenueResolverService implements Resolve<Venue> {
  directory = 'assets/content/venues';
  mdPath = '';
  slug = '';
  year = '';
  month = '';
  
  constructor(private contentService: ContentService) { 
  }
  
  resolve(route: ActivatedRouteSnapshot): Observable<Venue> | Promise<Venue> {
    ({ slug: this.slug, year: this.year, month: this.month } = route.params);
    this.mdPath = `venues/${this.year}/${this.month}/${this.slug}/readme.md`;
    return this.contentService.getContent<Venue>(this.mdPath).pipe(
      take(1),
      map((lm: Venue) => {
        return {
          ...lm,
          slug: toSlug(lm.title)
        };
      }),
      map((lm: Venue) => {
        return this.updatePaths(lm);
      })
    );
  }

  updatePaths(item: Venue): Venue {
    const [year, month, date] = getSegmentedDate(item.dateStart);
    const slug = toSlug(item.title);
    const {venueImages} = item;
    if (
      venueImages &&
      Array.isArray(venueImages) &&
      venueImages.length
    ) {
      item.venueImages = venueImages.map((image) => {
        return {
          sm: `${this.directory}/${year}/${month}-${date}/${slug}/${image.sm}`,
          lg: `${this.directory}/${year}/${month}-${date}/${slug}/${image.lg}`,
        };
      });
    }
    return item;
  }
}
