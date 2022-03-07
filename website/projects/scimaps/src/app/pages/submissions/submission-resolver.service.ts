import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DiscoverItem } from '../../core/models/discover-item';
import { ContentService } from '../../shared/services/content.service';

@Injectable({
  providedIn: 'root'
})
export class SubmissionResolverService implements Resolve<DiscoverItem[]> {

  result!: Observable<DiscoverItem[]> | Observable<never>;

  constructor(private content: ContentService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DiscoverItem[]> | Observable<never> {

    const {iteration} = route.params;
    return this.content.getIndex<DiscoverItem>('app-submissions').pipe(
      take(1),
      map(item => {
        if (iteration) {
          return item.filter(submission => {
            return submission.iteration === parseInt(iteration, 10);
          });
        } else {
          return item;
        }
      })
    );
  }
}
