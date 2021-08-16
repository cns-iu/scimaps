import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { isHttp } from '../../constants/utils';
import { ContentService, toSlug } from '../../shared/services/content.service';

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
  const result: MakerVideo[] = []
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
}
@Injectable({
  providedIn: 'root'
})
export class MakerVideosResolverService implements Resolve<MakerVideo[]> {

  directory = 'assets/content/maker-videos'
  constructor(private content: ContentService) { }

  updatePaths(makerVideo: MakerVideo): MakerVideo {
    if (makerVideo.image && !isHttp(makerVideo.image)) {
      makerVideo.image = `${this.directory}/${makerVideo.slug}/${makerVideo.image}`;
    }
    return makerVideo
  }
  postProcess(makerVideos: MakerVideo[]): MakerVideo[] {
    return makerVideos.map((makerVideo: MakerVideo) => {
      makerVideo.slug = toSlug(makerVideo.title);
      return this.updatePaths(makerVideo);
    });
  }

  resolve(): Observable<MakerVideo[]> {
    return this.content.getIndex<MakerVideo>('maker-videos').pipe(
      take(1),
      map((makerVideos: MakerVideo[]) => {
        return this.postProcess(makerVideos);
      })
    );
  }
}
