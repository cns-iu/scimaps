import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { DiscoverItem, MapItem } from '../../core/models/discover-item';
import { ContentService } from '../../shared/services/content.service';


@Injectable({
  providedIn: 'root'
})
export class MapResolverService implements Resolve<MapItem> {

  constructor(private content: ContentService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MapItem> | Observable<never> {
    const iteration = route.paramMap.get('iteration');
    const sequence = route.paramMap.get('sequence');
    const mapSlug = `map/${iteration}/${sequence}`;
    return this.content.getContent(mapSlug).pipe(take(1), map<any, MapItem>((data) => {
      const item: MapItem = {} as MapItem;
      item.title = data.en.title;
      item.makers = data.en.makers.map((m: any) => m.replace('/readme', '').replace('-', ' ')),
      item.credit = 'Credit line text';
      item.description = data.en.body;
      item.thumbnail = `assets/content/map/${data.en.iteration}/${data.en.sequence}/${data.en.image.lg}`;
      item.references = data.en.references;
      return item;
    }));
  }
}
