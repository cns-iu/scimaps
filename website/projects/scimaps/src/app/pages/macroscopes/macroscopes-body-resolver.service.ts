import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { ContentService } from '../../shared/services/content.service';

interface MacroscopesBody {
  body: string;
  carousel: {
    title: string,
    sm: string,
    lg: string
  }[]; 
}
@Injectable({
  providedIn: 'root'
})
export class MacroscopesBodyResolverService implements Resolve<{body: string}> {

  constructor(private content: ContentService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{body: string}> | Observable<never> {
    return this.content.getContent<{body: string}>('site/macroscopes/whatIsAMacroscope.md').pipe(
      take(1),
      map(response => {
        console.log(response);
        return response
      })
    );
  }
}
