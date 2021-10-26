import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Params, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { getSegmentedDate } from '../../constants/utils';
import { ContentService, toSlug } from '../../shared/services/content.service';


export interface Blog {
  title: string;
  date: string;
  body: string;
  blogImages: { sm: string, lg: string }[]
}

@Injectable({
  providedIn: 'root'
})
export class BlogsResolverService implements Resolve<Blog[]> {

  directory = 'content/blog';

  constructor(private contentService: ContentService) { }

  getImageSource(blog: Blog) {
    const [year, month, date] = getSegmentedDate(blog.date);
    const slug = toSlug(blog.title);

    const result = blog.blogImages.map((image: { sm: string, lg: string }) => {
      return {
        sm: `assets/${this.directory}/${year}/${month}-${date}/${slug}/${image.sm}`,
        lg: `assets/${this.directory}/${year}/${month}-${date}/${slug}/${image.lg}`
      }
    })
    return result
  }
  toBlog(blogItem: Params): Blog {
    return {
      title: blogItem.title,
      date: blogItem.date,
      body: blogItem.body,
      blogImages: blogItem.blogImages
    }
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
      })
    )
  }
}
