import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ContentService } from '../../shared/services/content.service';

interface SubmissionsBody {
  body: string;
}
@Injectable({
  providedIn: 'root'
})
export class SubmissionsBodyResolverService implements Resolve<SubmissionsBody> {
  directory = 'assets/content/site/submissions';

  constructor(private content: ContentService, private router: Router) { }

  resolve(): Observable<SubmissionsBody> | Observable<never> {
    return this.content.getContent<SubmissionsBody>('site/submissions/submissions.md').pipe(
      take(1),
      map(response => {
        return response;
      })
    );
  }
}
