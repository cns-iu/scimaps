import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { MapMacroscopeItem, Language } from '../../core/models/discover-item';
import { ContentService } from './content.service';


@Injectable({
  providedIn: 'root'
})
export class MapMacroscopeResolverService implements Resolve<MapMacroscopeItem> {

  constructor(private content: ContentService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<MapMacroscopeItem> | Observable<never> {
    const languages$ = this.content.getContent('site/languages.md').pipe(take(1));
    const language = route.queryParamMap.get('lang') || 'en';
    const type = route.data.type;
    const iteration = route.paramMap.get('iteration');
    const sequence = route.paramMap.get('sequence');
    const mapSlug = `${type}/${iteration}/${sequence}`;
    const content$ = this.content.getContent(mapSlug).pipe(take(1));

    // tslint:disable-next-line: no-any
    return combineLatest([languages$, content$]).pipe(map<[any, any], MapMacroscopeItem>(([languages, data]) => {
      const item: MapMacroscopeItem = {} as MapMacroscopeItem;
      item.title = data[language].title;
      item.makers = data.en.makers.map((m: string) => {
        const m1 = m.replace('/readme', '');
        const m2 = m1.replace(/-/g, ' ');
        const names = m2.split(' ');
        for (let i = 0, x = names.length; i < x; i++) {
          names[i] = names[i][0].toUpperCase() + names[i].substr(1);
        }
        return {
          name: names.join(' '),
          job: 'Job Title',
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci.',
          thumbnail: `assets/content/person/${m1}/image.jpg`
        };
      });
      item.credit = data[language].creditLine;
      item.description = data[language].body;
      item.references = data[language].references;
      item.thumbnail = `assets/content/${type}/${data.en.iteration}/${data.en.sequence}/${data.en.image.lg}`;
      item.translations = languages.languages.filter((lang: Language) => {
        return Object.keys(data).includes(lang.abbr_short);
      });
      item.externalLink = data.en.externalLink;
      return item;
    }));
  }
}
