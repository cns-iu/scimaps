import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Params, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ContentService } from '../../shared/services/content.service';


export interface VenuesBody {
  accordianHeader: string;
  accordianContent: string;
} 
@Injectable({
  providedIn: 'root'
})
export class VenuesBodyResolverService implements Resolve<VenuesBody> {
  
  mdPath = 'site/venues/venues.md';

  constructor(private content: ContentService) { }
  
  resolve(): VenuesBody | Observable<VenuesBody> | Promise<VenuesBody> {
    return this.content.getContent<VenuesBody>(this.mdPath).pipe(
      take(1),
    )
  }
}
