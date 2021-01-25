import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { DiscoverItem } from '../../core/models/discover-item';
import { ContentService } from '../../shared/services/content.service';


@Injectable({
  providedIn: 'root'
})
export class MapsResolverService implements Resolve<DiscoverItem[]> {

  constructor(private content: ContentService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DiscoverItem[]> | Observable<never> {
    return this.content.getIndex('app-maps').pipe(take(1));
  }
}
