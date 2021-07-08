import { Injectable } from '@angular/core';
import { catchError, map, take } from 'rxjs/operators';
import { ContentService } from '../../shared/services/content.service';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { isHttp } from '../../constants/utils';

interface AboutBody {
  curatorsDescription: string;
  advisoryBoardDescription: string;
  ambassadorsDescription: string;
  overviewParagraph: string;
  overviewQuote: string;
  annualReports: {year: string, pdfLink: string }[]
}
@Injectable({
  providedIn: 'root'
})
export class AboutBodyResolverService implements Resolve<AboutBody> {
  
  directory = 'assets/content/site/about'
  constructor(private content: ContentService) {}
  resolve(): Observable<AboutBody> | Observable<never> {
    const mdPath = 'site/about/about.md';
    return this.content.getContent<AboutBody>(mdPath).pipe(
      take(1),
      map((body: AboutBody) => {
        const { annualReports } = body;
        if (annualReports && Array.isArray(annualReports)) {
          annualReports.forEach((report: {year: string, pdfLink: string}) => {
            const pdfLink = report.pdfLink
            if (!isHttp(pdfLink)) {
              report.pdfLink = `${this.directory}/${report.pdfLink}`
            }
          });
          body.annualReports = annualReports;
        }
        return body;
      }),
      catchError(() => {
        console.error('Error in fetching', mdPath);
        return of({} as AboutBody);
      }));
  }
}
