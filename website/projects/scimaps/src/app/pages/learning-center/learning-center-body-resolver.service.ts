import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map, take } from 'rxjs/operators';
import { ContentService } from '../../shared/services/content.service';
import { BlogResolverService } from '../blogs/blog-resolver.service';
import { Blog } from '../blogs/blogs-resolver.service';
export interface LearningCenterBody {
  featured: {
    type: string,
    'featured-blog-slug'?: string,
    'featured-video-slug'?: string,
    slug?: string,
  };
  featuredBlog: Blog
}

@Injectable({
  providedIn: 'root'
})
export class LearningCenterBodyResolverService {

  mdPath = 'site/learning-center/learning-center.md';
  directory = 'assets/content/site/learning-center';
  constructor(private content: ContentService, private blogResolver: BlogResolverService) {
  }

  resolve(): Observable<LearningCenterBody> | Observable<never> {
    return this.content.getContent<LearningCenterBody>(this.mdPath).pipe(
      take(1),
      concatMap((body: LearningCenterBody) => {
        const { featured } = body;
        if (featured.type === 'blog' && featured['featured-blog-slug']) {
          const slug = featured['featured-blog-slug'];
          const featuredBlog$ = this.blogResolver.getResult(`blog/${slug}`);
          return featuredBlog$.pipe(
            map((blog: Blog) => {
              return { ...body, featuredBlog: blog }
            })
          )
        } else if (featured.type === 'video' && featured['featured-video-slug']) {
          const segments = featured['featured-video-slug'].split('/');
          featured.slug = segments[segments.length - 2];
          body.featured = featured;
          return of(body);
        } else {
          return of(body);
        }
      })
    );
  }
}
