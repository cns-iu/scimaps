import { Injectable } from '@angular/core';
import {
  Resolve
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { isHttp } from '../../constants/utils';
import { ContentService } from '../../shared/services/content.service';

export interface HostingBody {
  tabs: Array<{ image: string }>;
  overview: string;
  carousel: { sm: string; lg: string }[];
  install_guide: string;
  master_booklet: string;
}

@Injectable({
  providedIn: 'root',
})
export class HostingBodyResolverService implements Resolve<HostingBody> {
  mdPath = 'site/hosting/hosting.md';
  directory = 'assets/content/site/hosting';
  constructor(private content: ContentService) {}

  resolve(): HostingBody | Observable<HostingBody> {
    return this.content.getContent<HostingBody>(this.mdPath).pipe(
      take(1),
      map((body: HostingBody) => {
        return this.updatePaths(body);
      })
    );
  }

  // converts paths to absolute paths.
  updatePaths(body: HostingBody): HostingBody {
    if (body.install_guide && !isHttp(body.install_guide)) {
      body.install_guide = `${this.directory}/${body.install_guide}`;
    }
    if (body.master_booklet && !isHttp(body.master_booklet)) {
      body.master_booklet = `${this.directory}/${body.master_booklet}`;
    }
    // Carousel
    const { carousel } = body;
    if (carousel && Array.isArray(carousel)) {
      carousel.forEach((image) => {
        if (image.lg && !isHttp(image.lg)) {
          image.lg = `${this.directory}/${image.lg}`;
        }
        if (image.sm && !isHttp(image.sm)) {
          image.sm = `${this.directory}/${image.sm}`;
        }
      });
      body.carousel = carousel;
    }
    // Tabs
    const { tabs } = body;
    tabs.forEach((tab) => {
      if (tab.image && !isHttp(tab.image)) {
        tab.image = `${this.directory}/${tab.image}`;
      }
    });
    return body;
  }
}
