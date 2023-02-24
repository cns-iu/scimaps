import { Injectable } from '@angular/core';
import { Params, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DiscoverItem } from '../../core/models/discover-item';
import { ContentService } from '../../shared/services/content.service';

@Injectable({
  providedIn: 'root'
})
export class SubmissionResolverService implements Resolve<DiscoverItem[]> {

  result!: Observable<DiscoverItem[]> | Observable<never>;

  constructor(private content: ContentService) { }

  resolve(route: Params): Observable<DiscoverItem[]> | Observable<never> {
    const {iteration} = route.params;
    return this.content.getIndex<DiscoverItem>('app-submissions').pipe(
      take(1),
      map(item => {
        if (iteration) {
          return item.filter(submission => {
            return submission.iteration === parseInt(iteration, 10);
          });
        } else {
          const maxIteration = Math.max(...item.map(s => s.iteration));
          return item.filter(s => s.iteration === maxIteration);
        }
      })
    );
  }
}
