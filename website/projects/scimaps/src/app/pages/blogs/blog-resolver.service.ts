import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Params,
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
  constructor(private contentService: ContentService) { }

  mdPath = '';
  directory = 'assets/content/blog';

  getBlogImageSource(blog: Blog): { sm: string, lg: string }[] {
    const [year, month, date] = getSegmentedDate(blog.date);
    const slug = toSlug(blog.title);
    const result = blog.blogImages.map((image: { sm: string; lg: string }) => {
      let sm = image.sm;
      let lg = image.lg;
      if (!isHttp(image.sm)) {
        sm = `${this.directory}/${year}/${month}-${date}/${slug}/${image.sm}`;
      }
      if (!isHttp(image.lg)) {
        lg = `${this.directory}/${year}/${month}-${date}/${slug}/${image.lg}`;
      }
      return {
        sm,
        lg,
      };
    });
    return result;
  }

  toBlog(blogItem: Params): Blog {
    const blog: Blog = {
      title: blogItem.title,
      date: blogItem.date,
      published: blogItem.published,
      body: blogItem.body,
      blogImages: blogItem.blogImages,
      slug: toSlug(blogItem.title)
    }
    blog.blogImages = this.getBlogImageSource(blog);
    return blog;
  }

  resolve(
    route: Params
  ): Blog | Observable<Blog> | Promise<Blog> {
    // console.log('resolver called', route);
    const { year, month, slug } = route.params;
    this.mdPath = `blog/${year}/${month}/${slug}/readme.md`;
    return this.getResult(this.mdPath);
  }
  getResult(mdPath: string): Blog | Observable<Blog> | Promise<Blog> {
    return this.contentService.getContent<Params>(mdPath).pipe(
      take(1),
      map((blog: Params) => this.toBlog(blog))
    );
  }
}
