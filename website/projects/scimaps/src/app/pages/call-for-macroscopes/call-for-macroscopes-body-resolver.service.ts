import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ContentService } from '../../shared/services/content.service';


interface CallForMacroscopesBody {
  tabs: {header: string, content: string}[]
}

@Injectable({
  providedIn: 'root'
})
export class CallForMacroscopesBodyResolver {

  constructor(private content: ContentService) {}

  resolve(): Observable<{ body: CallForMacroscopesBody }> | Observable<never> {
    return this.content.getContent<{body: CallForMacroscopesBody}>('site/callForMacroscopes.md').pipe(take(1));
  }
}
