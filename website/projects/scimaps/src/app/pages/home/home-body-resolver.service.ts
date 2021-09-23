import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { isHttp } from '../../constants/utils';
import { ActionCardItem } from '../../core/models/action-card-item';
import { ContentService } from '../../shared/services/content.service';


interface HomeBody {
  cta: ActionCardItem;
}

@Injectable({
  providedIn: 'root'
})
export class HomeBodyResolverService implements Resolve<HomeBody> {
  mdPath = 'site/home/home.md';
  directory = 'assets/content/site/home';
  constructor(private content: ContentService) { }

  resolve(): Observable<HomeBody> {
    return this.content.getContent<HomeBody>(this.mdPath).pipe(
      take(1),
      map((body: HomeBody) => {
        return this.updatePaths(body);
      })
    );
  }

  updatePaths(body: HomeBody): HomeBody {
    const {cta} = body;
    if (cta.imageSource && !isHttp(cta.imageSource)) {
      cta.imageSource = `${this.directory}/${cta.imageSource}`;
    }
    body.cta = cta;
    return body;
  }
}
