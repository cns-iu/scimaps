import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Params, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ContentService } from '../../shared/services/content.service';

export interface LearningMaterial {
  title: string;
  body: string;
  images: {
    sm: string,
    lg: string
  }[];
}
@Injectable({
  providedIn: 'root'
})
export class LearningMaterialResolverService implements Resolve<LearningMaterial[]> {

  constructor(private contentService: ContentService) { }


  resolve(): LearningMaterial[] | Observable<LearningMaterial[]> {
    return this.contentService.getIndex<LearningMaterial>('learning-materials').pipe(
      take(1)
    )
  }
}
