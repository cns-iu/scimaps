import { Injectable } from '@angular/core';
import { Params, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { isHttp } from '../../constants/utils';
import { ContentService, toSlug } from '../../shared/services/content.service';
import { toMakerVideo } from './maker-video-resolver.service';

export interface MakerVideo {
  title: string;
  short_description: string;
  long_description: string;
  slug: string;
  videoLink: string;
  maker: string;
  image: string;
}

export const getMakerVideo = (n: number): MakerVideo[] => {
  const result: MakerVideo[] = [];
  for (let i = 0; i < n; i++) {
    result.push({
      title: `title${i}`,
      short_description: `short ${i}`,
      long_description: `long ${i}`,
      slug: `slug${i}`,
      videoLink: `link$ ${i}`,
      maker: 'maker/readme',
      image: `image.${i}.jpg`
    });
  }
  return result;
};
@Injectable({
  providedIn: 'root'
})
export class MakerVideosResolverService implements Resolve<MakerVideo[]> {

  directory = 'assets/content/maker-videos';
  constructor(private content: ContentService) { }

  resolve(): Observable<MakerVideo[]> {
    return this.content.getIndex<Params>('app-maker-videos').pipe(
      take(1),
      map((makerVideos: Params[]) => {
        return makerVideos.map(item => toMakerVideo(item, this.directory));
      })
    );
  }
}
