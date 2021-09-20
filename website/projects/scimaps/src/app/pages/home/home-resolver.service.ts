import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';


interface HomeData {
  cta: {
    title: string,
    subtitle: string,
    body: string,
    buttonLabel: string,
    buttonLink: string,
    imageSource: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class HomeResolverService implements Resolve<HomeData> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<HomeData> {
    return of({} as HomeData);
  }
}
