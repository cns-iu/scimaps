import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ContentService } from '../../shared/services/content.service';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutResolverService implements Resolve<{[key: string]: any}[]> {

  // TODO: Model for return type
  constructor(private content: ContentService) { }

  resolve(): Observable<{[key: string]: any}[]> | Observable<never> {
    console.log('resolve call')
    return this.content.getIndex<{[key: string]: any}>('people').pipe(take(1));
  }
}
