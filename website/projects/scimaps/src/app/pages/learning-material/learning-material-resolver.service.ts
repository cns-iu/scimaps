import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Params, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ContentService, toSlug } from '../../shared/services/content.service';
import { LearningMaterial } from '../hosting/learning-materials-resolver.service';

@Injectable({
  providedIn: 'root'
})
export class LearningMaterialResolverService implements Resolve<LearningMaterial> {
  directory = 'content/learning-materials';
  mdPath = '';
  slug = '';
  constructor(private contentService: ContentService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<LearningMaterial> | Observable<never> {
    console.log('resolve', route);
    ({ slug: this.slug } = route.params);
    this.mdPath = `learning-materials/${this.slug}/readme.md`;
    return this.contentService.getContent<LearningMaterial>(this.mdPath).pipe(
      take(1),
      map((lm: LearningMaterial) => {
        return {
          ...lm,
          slug: toSlug(lm.title)
        };
      }),
      map((lm: LearningMaterial) => {
        return this.updatePaths(lm);
      })
    );
  }

  updatePaths(item: LearningMaterial): LearningMaterial {
    const {image} = item;
    if (image) {
      item.image = this.updateImagePath(image);
    }
    return item;
  }

  // Single Image
  updateImagePath(image: {sm: string, lg: string}): {sm: string, lg: string} {
    return {
      ...image,
      sm: `assets/${this.directory}/${this.slug}/${image.sm}`,
      lg: `assets/${this.directory}/${this.slug}/${image.lg}`
    };
  }
}
