import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { getSegmentedDate, isHttp } from '../../constants/utils';
import { ContentService, toSlug } from '../../shared/services/content.service';
import { Blog } from './blogs-resolver.service';

@Injectable({
  providedIn: 'root',
})
export class BlogResolverService implements Resolve<Blog> {
  constructor(private contentService: ContentService) {}

  mdPath = '';
  directory = 'assets/content/blog';
  
  getImageSource(blog: Blog) {
    const [year, month, date] = getSegmentedDate(blog.date);
    const slug = toSlug(blog.title);
    const result = blog.blogImages.map((image: { sm: string; lg: string }) => {
      let sm = image.sm;
      let lg = image.lg;
      if (!isHttp(image.sm)) {
        sm = `assets/${this.directory}/${year}/${month}-${date}/${slug}/${image.sm}`;
      }
      if (!isHttp(image.lg)) {
        lg = `assets/${this.directory}/${year}/${month}-${date}/${slug}/${image.lg}`;
      }
      return {
        sm: sm,
        lg: lg,
      };
    });
    return result;
  }

  resolve(
    route: ActivatedRouteSnapshot
  ): Blog | Observable<Blog> | Promise<Blog> {
    console.log('resolver called', route);
    const { year, month, slug } = route.params;
    this.mdPath = `blog/${year}/${month}/${slug}/readme.md`;

    return this.contentService.getContent<Blog>(this.mdPath).pipe(
      take(1),
      map((blog: Blog) => {
        return {
          ...blog,
          slug: toSlug(blog.title),
        };
      }),
      map((blog: Blog) => {
        blog.blogImages = this.getImageSource(blog);
        return blog;
      })
    );
  }
}
