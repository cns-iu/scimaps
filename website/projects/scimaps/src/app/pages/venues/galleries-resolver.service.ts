import { Injectable } from '@angular/core';
import { Params, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ContentService, toSlug } from '../../shared/services/content.service';


export interface Gallery { 
  title: string;
  date: string;
  end?: string;
  location: string;
  credit: string;
  images: string[];
  thumbs: string[];
};

@Injectable({
  providedIn: 'root'
})
export class GalleriesResolverService implements Resolve<Gallery[]> {

  directory = 'content/gallery';
  constructor(private contentService: ContentService) { }

  toGallery(item: Params): Gallery {
    return { ...item } as Gallery;
  }

  resolve(): Gallery[] | Observable<Gallery[]> | Promise<Gallery[]> {
    return this.contentService.getIndex<Gallery[]>('galleries').pipe(
      take(1),
      map((venues: Params[]) => {
        return venues.map((item: Params) => {
          const gallery = this.toGallery(item);
          return this.updatePaths(gallery);
        });
      })
    );
  }

  updatePaths(gallery: Gallery): Gallery {
    const fullDate = new Date(gallery.date);
    const year = fullDate.getFullYear();
    const date = ('0' + fullDate.getUTCDate()).slice(-2);
    const month = ('0' + (fullDate.getUTCMonth() + 1)).slice(-2);
    const slug = toSlug(gallery.title);

    // if (venue.pdfLink && !isHttp(venue.pdfLink)) {
    //   venue.pdfLink = `assets/${this.directory}/${year}/${month}-${date}/${slug}/${venue.pdfLink}`;
    // }
    // if (
    //   venue.venueImages &&
    //   Array.isArray(venue.venueImages) &&
    //   venue.venueImages.length
    // ) {
    //   venue.venueImages = venue.venueImages.map((image) => {
    //     return {
    //       sm: `assets/${this.directory}/${year}/${month}-${date}/${slug}/${image.sm}`,
    //       lg: `assets/${this.directory}/${year}/${month}-${date}/${slug}/${image.lg}`,
    //     };
    //   });
    // }
    // return venue;
    return {} as Gallery;
  }
}
