import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { concatMap, take } from 'rxjs/operators';
import { ContentService } from '../../shared/services/content.service';
export interface LearningCenterBody {
  featured: {
    type: string,
    'featured-blog-slug'?: string,
    'featured-video-slug'?: string,
    slug?: string,
  };
}

@Injectable({
  providedIn: 'root'
})
export class LearningCenterBodyResolverService {

  mdPath = 'site/learning-center/learning-center.md';
  directory = 'assets/content/site/learning-center';
  constructor(private content: ContentService) {

  }

  resolve(): Observable<LearningCenterBody> | Observable<never> {
    return this.content.getContent<LearningCenterBody>(this.mdPath).pipe(
      take(1),
      concatMap((body: LearningCenterBody) => {
        const {featured} = body;
        if (featured.type === 'blog' && featured['featured-blog-slug']) {
          const segments = featured['featured-blog-slug'].split('/');
          featured.slug = segments[segments.length - 2];
        } else if (featured.type === 'video' && featured['featured-video-slug']) {
          const segments = featured['featured-video-slug'].split('/');
          featured.slug = segments[segments.length - 2];
        }
        body.featured = featured;
        return of(body);
      })
    );
  }
}
