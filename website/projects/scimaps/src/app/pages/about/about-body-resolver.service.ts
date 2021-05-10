import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { ContentService } from '../../shared/services/content.service';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutBodyResolverService implements Resolve<{ body: {[key: string]: string} }> {
  constructor(private content: ContentService) {}

  resolve(): Observable<{ body: {[key: string]: string} }> | Observable<never> {
    return this.content.getContent<{body: {[key: string]: string}}>('site/about.md').pipe(take(1));
  }
}
