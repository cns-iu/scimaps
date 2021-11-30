import { Injectable } from '@angular/core';
import {
  Params,
  Resolve
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { getSegmentedDate, isHttp } from '../../constants/utils';
import { ContentService, toSlug } from '../../shared/services/content.service';
import { Blog } from './blogs-resolver.service';

const getBlogImageSource = (blog: Blog, directory = ''): { sm: string, lg: string }[] => {
  const [year, month, date] = getSegmentedDate(blog.date);
  const slug = toSlug(blog.title);
  let result: {sm: string, lg: string}[] = [];
  if (Array.isArray(blog.blogImages) && blog.blogImages.length) {
    result = blog.blogImages.map((image: { sm: string; lg: string }) => {
      let sm = image.sm;
      let lg = image.lg;
      if (!isHttp(image.sm)) {
        sm = `${directory}/${year}/${month}-${date}/${slug}/${image.sm}`;
      }
      if (!isHttp(image.lg)) {
        lg = `${directory}/${year}/${month}-${date}/${slug}/${image.lg}`;
      }
      return { sm, lg };
    });
  }
  return result;
};

export const toBlog = (blogItem: Params, directory = ''): Blog => {
  const blog: Blog = {
    publish_date: blogItem.publish_date,
    title: blogItem.title,
    date: blogItem.date,
    published: blogItem.published,
    body: blogItem.body,
    blogImages: blogItem.blogImages,
    slug: toSlug(blogItem.title)
  };
  blog.blogImages = getBlogImageSource(blog, directory);
  return blog;
};
@Injectable({
  providedIn: 'root',
})
export class BlogResolverService implements Resolve<Blog> {
  constructor(private contentService: ContentService) { }

  mdPath = '';
  directory = 'assets/content/blog';

  resolve(
    route: Params
  ): Blog | Observable<Blog> | Promise<Blog> {
    const { year, month, slug } = route.params;
    this.mdPath = `blog/${year}/${month}/${slug}/readme.md`;
    return this.getResult(this.mdPath);
  }
  getResult(mdPath: string): Observable<Blog> {
    return this.contentService.getContent<Params>(mdPath).pipe(
      take(1),
      map((blog: Params) => toBlog(blog, this.directory))
    );
  }
}
