import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { isHttp } from '../../constants/utils';
import { ContentService } from '../../shared/services/content.service';

export interface LearningCenterBody {
  description: string,
  image: string
}

@Injectable({
  providedIn: 'root'
})
export class LearningCenterBodyResolverService {

  mdPath = 'site/learning-center/learning-center.md';
  directory = 'assets/content/site/learning-center';
  constructor(private content: ContentService) {

  }

  resolve(): Observable<LearningCenterBody> | Observable<never> {
    return this.content.getContent<LearningCenterBody>(this.mdPath).pipe(
      take(1),
      map((body: LearningCenterBody) => {
        return this.updatePaths(body);
      })
    );
  }

  updatePaths(body: LearningCenterBody): LearningCenterBody {
    const {image} = body;
    if (image && !isHttp(image)) {
       body.image= `${this.directory}/${image}`;
    }
    return body;
  }
}
