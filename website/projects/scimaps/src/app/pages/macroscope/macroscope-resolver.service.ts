import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { MapItem } from '../../core/models/discover-item';
import { ContentService } from '../../shared/services/content.service';


@Injectable({
  providedIn: 'root'
})
export class MacroscopeResolverService implements Resolve<MapItem> {

  constructor(private content: ContentService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<MapItem> | Observable<never> {
    const language = 'en'; //how to change this?
    const iteration = route.paramMap.get('iteration');
    const sequence = route.paramMap.get('sequence');
    const mapSlug = `macroscope/${iteration}/${sequence}`;
    return this.content.getContent(mapSlug).pipe(take(1), map<any, MapItem>((data) => {
      const item: MapItem = {} as MapItem;
      item.title = data[language].title;
      item.makers = data[language].makers.map((m: any) => {
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
      item.thumbnail = `assets/content/macroscope/${data.en.iteration}/${data.en.sequence}/${data.en.image.lg}`;
      return item;
    }));
  }
}
