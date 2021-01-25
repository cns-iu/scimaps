import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { DiscoverItem } from '../../core/models/discover-item';
import { ContentService } from '../../shared/services/content.service';


@Injectable({
  providedIn: 'root'
})
export class MacroscopesResolverService implements Resolve<DiscoverItem[]> {

  constructor(private content: ContentService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DiscoverItem[]> | Observable<never> {
    return this.content.getIndex<DiscoverItem>('app-macroscopes').pipe(take(1));
  }
}
