import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { isHttp } from '../../constants/utils';
import { ContentService } from '../../shared/services/content.service';


interface MapsBody {
  body: string;
  carousel: {
    title: string;
    sm: string;
    lg: string;
  }[];
}
@Injectable({
  providedIn: 'root'
})
export class MapsBodyResolverService implements Resolve<MapsBody> {

  directory = 'assets/content/site/maps';
  constructor(private content: ContentService, private router: Router) { }

  resolve(): Observable<MapsBody> | Observable<never> {
    return this.content.getContent<MapsBody>('site/maps/whatIsAMap.md').pipe(
      take(1),
      map((response) => {
        return this.updatePaths(response);
      })
    );
  }

  updatePaths(body: MapsBody): MapsBody {
    // Carousel
    const { carousel } = body;
    if (carousel && Array.isArray(carousel)) {
      carousel.forEach((image) => {
        if (image.lg && !isHttp(image.lg)) {
          image.lg = `${this.directory}/${image.lg}`;
        }
        if (image.sm && !isHttp(image.sm)) {
          image.sm = `${this.directory}/${image.sm}`;
        }
      });
      body.carousel = carousel;
    }
    return body;
  }
}
