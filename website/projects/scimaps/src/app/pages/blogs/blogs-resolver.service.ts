import { Injectable } from '@angular/core';
import { Params, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ContentService } from '../../shared/services/content.service';
import { toBlog } from './blog-resolver.service';


export interface Blog {
  title: string;
  date: string;
  body: string;
  slug: string;
  published: boolean;
  publish_date: string;
  blogImages: { sm: string, lg: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class BlogsResolverService implements Resolve<Blog[]> {

  directory = 'assets/content/blog';

  constructor(private contentService: ContentService) { }

  resolve(): Observable<Blog[]> | Observable<never> {
    return this.contentService.getIndex<Params>('app-blogs').pipe(
      map((items: Params[]) => {
        return items.map((item: Params) => toBlog(item, this.directory));
      }),
      map((items: Blog[]) => {
        return items.filter((item: Blog) => {
          const today = new Date();
          const todayUTC = Date.parse(today.toUTCString());
          const publishedDate = new Date(item.publish_date);
          publishedDate.setUTCHours(0, 0, 0, 0);
          const publishDateUTC = Date.parse(publishedDate.toUTCString());
          return todayUTC > publishDateUTC;
        });
      })
    );
  }
}
