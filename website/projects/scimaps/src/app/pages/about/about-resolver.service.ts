import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ContentService, toSlug } from '../../shared/services/content.service';
import { take, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Profile } from '../../core/models/profile';

@Injectable({
  providedIn: 'root'
})
export class AboutResolverService implements Resolve<Profile[]> {

  constructor(private content: ContentService) { }
  
  /**
   * getImageSource - used to generate full asset path of the image of the profile.
   * @param - profile 
   * @returns - string - relative path of the image in assets.
   */
  getImageSource(profile: Profile): string {
    const directory = 'content/person'
    return `assets/${directory}/${profile.slug}/${profile.image}`;
  }

  resolve(): Observable<Profile[]> | Observable<never> {
    return this.content.getIndex<{[key: string]: string}>('people').pipe(
      take(1),
      map((items: {[key: string]: string}[]) => {
        return items.map((item: {[key: string]: string}) => {
          const profile: Profile = {
            name: item.name,
            slug: toSlug(item.name),
            title: item.jobTitle,
            link: item.homepage,
            body: item.body,
            affiliation: item.affiliation,
            image: item.image
          };
          profile.image = this.getImageSource(profile)
          return profile;
        });
      }),
    );
  }
}
