import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { ContentService } from '../../shared/services/content.service';

export interface MakerVideo {
  title: string;
  short_description: string;
  long_description: string;
  slug: string;
  videoLink: string;
  maker: string;
}
@Injectable({
  providedIn: 'root'
})
export class MakerVideosResolverService implements Resolve<MakerVideo[]> {

  constructor(private content: ContentService) { }

  resolve(): Observable<MakerVideo[]> {
    return this.content.getIndex<MakerVideo>('maker-videos').pipe(
      take(1)
    );
  }
}
