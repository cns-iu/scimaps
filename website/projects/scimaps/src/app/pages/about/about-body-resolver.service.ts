import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { ContentService } from '../../shared/services/content.service';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

interface AboutBody {
  curatorsDescription: string;
  advisoryBoardDescription: string;
  ambassadorsDescription: string;
}
@Injectable({
  providedIn: 'root'
})
export class AboutBodyResolverService implements Resolve<{ body: AboutBody }> {
  constructor(private content: ContentService) {}

  resolve(): Observable<{ body: AboutBody }> | Observable<never> {
    return this.content.getContent<{body: AboutBody}>('site/about.md').pipe(take(1));
  }
}
