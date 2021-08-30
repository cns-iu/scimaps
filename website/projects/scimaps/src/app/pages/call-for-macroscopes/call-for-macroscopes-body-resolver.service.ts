import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take} from 'rxjs/operators';
import { isHttp } from '../../constants/utils';
import { ContentService } from '../../shared/services/content.service';


interface CallForMacroscopesBody {
  submitURL: string;
  pdfLink: string;
  lastIteration: number;
  tabs: {header: string, content: string}[];
  allowSubmissions: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CallForMacroscopesBodyResolver implements Resolve<CallForMacroscopesBody> {

  constructor(private content: ContentService) {}

  directory = 'assets/content/site';
  resolve(): Observable<CallForMacroscopesBody> | Observable<never> {
    return this.content.getContent<CallForMacroscopesBody>('site/callForMacroscopes.md').pipe(
      take(1),
      map((response: CallForMacroscopesBody) => {
        if (response.pdfLink) {
          if (!isHttp(response.pdfLink)) {
            response.pdfLink = `${this.directory}/${response.pdfLink}`;
          }
        }
        return response;
      })
    );
  }
}
