import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ContentService, toSlug } from '../../shared/services/content.service';
import { take, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Profile } from '../../core/models/profile';

@Injectable({
  providedIn: 'root'
})
export class AboutResolverService implements Resolve<{[key: string]: any}[]> {

  constructor(private content: ContentService) { }

  resolve(): Observable<Profile[]> | Observable<never> {
    return this.content.getIndex<{[key: string]: string}>('people').pipe(
      take(1),
      map((items: any[]) => {
        return items.map((item: any) => {
            const profile: Profile = {
            name: item.name,
            slug: toSlug(item.name),
            title: 'Title',
            link: 'https://www.google.com',
            body: 'Body',
            affiliation: 'Affiliation',
            image: item.image
          }
          return profile;
        });
      }),
    )
  }
}
