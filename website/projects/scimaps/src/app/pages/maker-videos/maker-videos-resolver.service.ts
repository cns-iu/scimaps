import { Injectable } from '@angular/core';
import { Params, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContentService } from '../../shared/services/content.service';
import { toMakerVideo } from './maker-video-resolver.service';

export interface MakerVideo {
  title: string;
  short_description: string;
  long_description: string;
  slug: string;
  videoLink: string;
  maker: string;
  image: string;
  date: string;
}

export const getMakerVideo = (n: number): MakerVideo[] => {
  const result: MakerVideo[] = [];
  for (let i = 0; i < n; i++) {
    result.push({
      title: `title${i}`,
      short_description: `short ${i}`,
      long_description: `long ${i}`,
      slug: `title${i}`,
      videoLink: `link$ ${i}`,
      maker: 'maker/readme',
      image: `image.${i}.jpg`,
      date: `date${i}`
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

  resolve(route: Params): Observable<MakerVideo[]> {
    const {videosCount} = route.data;
    return this.content.getIndex<Params>('app-maker-videos').pipe(
      map((items: Params[]) => {
        if (videosCount && videosCount > 0) {
          console.warn(items)
          return items.sort((a, b) => a.date > b.date ? -1 : 1).slice(0, videosCount);
        } else {
          console.warn(items)
          return items;
        }
      }),
      map((makerVideos: Params[]) => {
        return makerVideos.map(item => toMakerVideo(item, this.directory));
      })
    );
  }
}
