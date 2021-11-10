import { Injectable } from '@angular/core';
import { Params, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { getSegmentedDate, isHttp } from '../../constants/utils';
import { ContentService, toSlug } from '../../shared/services/content.service';


export interface Blog {
  title: string;
  date: string;
  body: string;
  slug: string;
  blogImages: { sm: string, lg: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class BlogsResolverService implements Resolve<Blog[]> {

  directory = 'content/blog';

  constructor(private contentService: ContentService) { }

  getImageSource(blog: Blog): {sm: string, lg: string}[] {
    const [year, month, date] = getSegmentedDate(blog.date);
    const slug = toSlug(blog.title);

    const result = blog.blogImages.map((image: { sm: string, lg: string }) => {
      let sm = image.sm;
      let lg = image.lg;
      if (!isHttp(image.sm)) {
        sm = `assets/${this.directory}/${year}/${month}-${date}/${slug}/${image.sm}`;
      }
      if (!isHttp(image.lg)) {
        lg = `assets/${this.directory}/${year}/${month}-${date}/${slug}/${image.lg}`;
      }
      return {
        sm,
        lg
      };
    });
    return result;
  }

  toBlog(blogItem: Params): Blog {
    return {
      title: blogItem.title,
      date: blogItem.date,
      body: blogItem.body,
      blogImages: blogItem.blogImages,
      slug: toSlug(blogItem.title)
    };
  }

  resolve(): Observable<Blog[]> | Observable<never> {
    return this.contentService.getIndex<Params>('blogs').pipe(
      take(1),
      map((items: Params[]) => {
        return items.map((item: Params) => {
          const blog: Blog = this.toBlog(item);
          blog.blogImages = this.getImageSource(blog);
          return blog;
        });
      }),
      map((items: Blog[]) => {
        // return items;
        return items.sort((a: Blog, b: Blog) => {
          return Date.parse(b.date) - Date.parse(a.date);
        });
      })
    );
  }
}
