import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { isHttp } from '../../constants/utils';
import { ContentService, toSlug } from '../../shared/services/content.service';

export interface LearningMaterial {
  title: string;
  body: string;
  image: {
    sm: string,
    lg: string
  };
  slug?: string;
}
@Injectable({
  providedIn: 'root'
})
export class LearningMaterialResolverService implements Resolve<LearningMaterial[]> {

  directory = 'assets/content/learning-materials';



  constructor(private contentService: ContentService) { }

  resolve(): LearningMaterial[] | Observable<LearningMaterial[]> {
    return this.contentService.getIndex<LearningMaterial>('learning-materials').pipe(
      take(1),
      map((response: LearningMaterial[]) => {
        return response.map((lm: LearningMaterial) => {
          lm.slug = toSlug(lm.title);
          if (lm.image) {
            if (lm.image.sm && !isHttp(lm.image.sm)) {
              lm.image.sm = `${this.directory}/${lm.slug}/${lm.image.sm}`;
            }
            if (lm.image.lg && !isHttp(lm.image.lg)) {
              lm.image.lg = `${this.directory}/${lm.slug}/${lm.image.lg}`;
            }
          }
          return lm;
        });
      })
    )
  }
}
