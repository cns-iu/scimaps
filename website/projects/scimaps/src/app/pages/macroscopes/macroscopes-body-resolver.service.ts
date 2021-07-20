import { Injectable } from '@angular/core';
import {
  Resolve,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { isHttp } from '../../constants/utils';

import { ContentService } from '../../shared/services/content.service';

interface MacroscopesBody {
  body: string;
  carousel: {
    title: string;
    sm: string;
    lg: string;
  }[];
}
@Injectable({
  providedIn: 'root',
})
export class MacroscopesBodyResolverService
  implements Resolve<MacroscopesBody>
{
  constructor(private content: ContentService, private router: Router) {}
  directory = 'assets/content/site/macroscopes';
  resolve(): Observable<MacroscopesBody> | Observable<never> {
    return this.content
      .getContent<MacroscopesBody>('site/macroscopes/whatIsAMacroscope.md')
      .pipe(
        take(1),
        map((response) => {
          return this.updatePaths(response);
        })
      );
  }

  updatePaths(body: MacroscopesBody): MacroscopesBody {
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
