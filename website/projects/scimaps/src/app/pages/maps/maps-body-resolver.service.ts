import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { ContentService } from '../../shared/services/content.service';


@Injectable({
  providedIn: 'root'
})
export class MapsBodyResolverService implements Resolve<{body: string}> {

  constructor(private content: ContentService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{body: string}> | Observable<never> {
    return this.content.getContent<{body: string}>('site/whatIsAMap.md').pipe(take(1));
  }
}
