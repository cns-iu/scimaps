import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

interface SubmissionBody {
  
}

@Injectable({
  providedIn: 'root'
})
export class SubmissionResolverService implements Resolve<SubmissionBody> {

  constructor() { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SubmissionBody> | Observable<never> {
    return of({})
  }
}
