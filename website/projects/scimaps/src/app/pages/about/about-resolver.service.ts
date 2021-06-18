import { Injectable } from '@angular/core';
import { Resolve, Params } from '@angular/router';
import { ContentService, toSlug } from '../../shared/services/content.service';
import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Profile } from '../../core/models/profile';

@Injectable({
  providedIn: 'root'
})
export class AboutResolverService implements Resolve<Profile[]> {

  constructor(private content: ContentService) { }

  /**
   * getImageSource - used to generate full asset path of the image of the profile.
   * @param - Profile
   * @returns - string - relative path of the image in assets.
   */
  getImageSource(profile: Profile): string {
    const directory = 'content/person';
    return `assets/${directory}/${profile.slug}/${profile.image}`;
  }

  resolve(): Observable<Profile[]> | Observable<never> {
    return this.content.getIndex<Params>('people').pipe(
      take(1),
      map((items: {[key: string]: string}[]) => {
        return items.filter(item => item.name).map((item: Params) => {
          const profile: Profile = {
            name: item.name,
            slug: toSlug(item.name),
            title: item.jobTitle,
            link: item.homepage,
            body: item.body,
            affiliation: item.affiliation,
            image: item.image,
            roles: item.roles || [],
            location_name: item.location_name
          };
          profile.image = this.getImageSource(profile);
          return profile;
        });
      }),
    );
  }
}
