import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { MapMacroscopeItem, Language } from '../../core/models/discover-item';
import { ContentService } from '../../shared/services/content.service';


@Injectable({
  providedIn: 'root'
})
export class MapResolverService implements Resolve<MapMacroscopeItem> {

  constructor(private content: ContentService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<MapMacroscopeItem> | Observable<never> {
    const languages$ = this.content.getContent('site/languages.md').pipe(take(1));
    const language = route.queryParamMap.get('lang') || 'en';
    const iteration = route.paramMap.get('iteration');
    const sequence = route.paramMap.get('sequence');
    const mapSlug = `map/${iteration}/${sequence}`;
    const content$ = this.content.getContent(mapSlug).pipe(take(1));

    return combineLatest([languages$, content$]).pipe(map<[any, any], MapMacroscopeItem>(([languages, data]) => {
      const item: MapMacroscopeItem = {} as MapMacroscopeItem;
      item.title = data[language].title;
      item.makers = data.en.makers.map((m: any) => {
        m = m.replace('/readme', '').replace('-', ' ');
        let names = m.split(' ')
        for (let i = 0, x = names.length; i < x; i++) {
          names[i] = names[i][0].toUpperCase() + names[i].substr(1);
        }
        return names.join(' ')
      });
      item.credit = data[language].creditLine;
      item.description = data[language].body;
      item.references = data[language].references;
      item.thumbnail = `assets/content/map/${data.en.iteration}/${data.en.sequence}/${data.en.image.lg}`;
      item.translations = languages.languages.filter((language: Language) => {
        return Object.keys(data).includes(language.abbr_short)
      });
      return item;
    }));
  }
}
