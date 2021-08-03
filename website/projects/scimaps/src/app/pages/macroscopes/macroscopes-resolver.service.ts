import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { DiscoverItem } from '../../core/models/discover-item';
import { ContentService } from '../../shared/services/content.service';



@Injectable({
  providedIn: 'root'
})
export class MacroscopesResolverService implements Resolve<DiscoverItem[]> {
  result!: Observable<DiscoverItem[]> | Observable<never>;
  cached = false;
  constructor(private content: ContentService) { }

  resolve(): Observable<DiscoverItem[]> | Observable<never> {
    if (!this.cached) { 
      this.result = this.content.getIndex<DiscoverItem>('app-macroscopes').pipe(take(1));
      this.cached = true;
    }
    return this.result;
  }
}
