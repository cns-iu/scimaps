import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Params, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ContentService } from '../../shared/services/content.service';

@Injectable({
  providedIn: 'root'
})
export class VenuesBodyResolverService implements Resolve<Params> {
  
  mdPath = 'site/about/about.md';

  constructor(private content: ContentService) { }
  
  resolve(): Params | Observable<Params> | Promise<Params> {
    return this.content.getContent<Params>(this.mdPath).pipe(
      take(1),
    )
  }
}
