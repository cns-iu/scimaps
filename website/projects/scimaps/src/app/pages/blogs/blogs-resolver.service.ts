import { Injectable } from '@angular/core';
import { Params, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContentService } from '../../shared/services/content.service';
import { toBlog } from './blog-resolver.service';


export interface Blog {
  title: string;
  date: string;
  body: string;
  slug: string;
  published: boolean;
  blogImages: { sm: string, lg: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class BlogsResolverService implements Resolve<Blog[]> {

  directory = 'assets/content/blog';

  constructor(private contentService: ContentService) { }

  resolve(): Observable<Blog[]> | Observable<never> {
    return this.contentService.getIndex<Params>('blogs').pipe(
      map((items: Params[]) => {
        return items.map((item: Params) => toBlog(item, this.directory));
      }),
      map((items: Blog[]) => {
        return items.sort((a: Blog, b: Blog) => {
          return Date.parse(b.date) - Date.parse(a.date);
        });
      })
    );
  }
}
