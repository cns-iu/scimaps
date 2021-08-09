import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Params, Resolve } from '@angular/router';
import { combineLatest, forkJoin, Observable, of } from 'rxjs';
import { catchError, map, mergeMap, take } from 'rxjs/operators';

import { MapMacroscopeItem, Language } from '../../core/models/discover-item';
import { ContentService } from './content.service';

@Injectable({
  providedIn: 'root',
})
export class MapMacroscopeResolverService implements Resolve<MapMacroscopeItem> {
  constructor(private content: ContentService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<MapMacroscopeItem> | Observable<never> {
    const languages$ = this.content
      .getContent<Params[]>('site/languages.md')
      .pipe(take(1));
    const language = route.queryParamMap.get('lang') || 'en';
    const type = route.data.type;
    const iteration = route.paramMap.get('iteration');
    const sequence = route.paramMap.get('sequence');
    const mapSlug = `${type}/${iteration}/${sequence}`;
    const content$ = this.content.getContent<Params>(mapSlug).pipe(take(1));

    // tslint:disable-next-line: no-any
    const response$ = combineLatest([languages$, content$]).pipe(
      map((response: [Params, Params]) => {
        const item: Params = {};
        const [languages, data] = response;
        item.title = data[language].title;
        item.makers = data.en.makers;
        item.credit = data[language].creditLine;
        item.description = data[language].body;
        item.references = data[language].references;
        item.thumbnail = `assets/content/${type}/${data.en.iteration}/${data.en.sequence}/${data.en.image.lg}`;
        item.translations = languages.languages.filter((lang: Language) => {
          return Object.keys(data).includes(lang.abbr_short);
        });
        item.externalLink = data.en.externalLink;
        return item;
      })
    );

    const people$ = response$.pipe(
      map((items) => items.makers),
      mergeMap((slugs) => {
        const forkJoins: Observable<Params>[] = slugs.map((slug: string) => {
          // {'s1': {}}, {'s2': {}}
          return this.content.getContent<Params>(`person/${slug}`).pipe(
            take(1),
            map((result: Params) => {
              return {
                [slug]: result,
              };
            }),
            catchError(() => {
              return of({});
            })
          );
        });
        // [ {'s1': {}}, {'s2': {}} ]
        return forkJoin(forkJoins);
      }),
      map((array: Params[]) => {
        const result = {};
        array.forEach((element) => {
          Object.assign(result, element);
        });
        // {'s1': {}, 's2': {}}
        return result;
      })
    );
    return combineLatest([response$, people$]).pipe(
      map((result: Params[]) => {
        const [response, people] = result;
        const makers = response.makers
          .map((slug: string) => {
            if (people.hasOwnProperty(slug) && people[slug]) {
              const profile = people[slug];
              if (profile) {
                const folder = slug.split('/')[0];
                profile.image = `assets/content/person/${folder}/${profile.image}`;
                return profile;
              }
            } else {
              return {
                name: slug.split('/')[0].replace('-', ' '),
                body: 'Lorem Ipsum'
              };
            }
          })
          .filter((profile: Params | undefined) => profile);
        response.makers = makers;
        return response as MapMacroscopeItem;
      })
    );
  }
}
