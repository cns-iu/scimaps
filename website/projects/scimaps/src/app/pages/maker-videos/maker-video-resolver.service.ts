import { Injectable } from '@angular/core';
import { Params, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { isHttp } from '../../constants/utils';
import { ContentService, toSlug } from '../../shared/services/content.service';
import { MakerVideo } from './maker-videos-resolver.service';

export const getVideoImageSource = (video: MakerVideo, directory = ''): string => {
  let result = '';
  if (video.image) {
    result = video.image;
    if (!isHttp(video.image)) {
      result = `${directory}/${video.slug}/${video.image}`;
    }
  }
  return result;
};

export const toMakerVideo = (item: Params, directory = ''): MakerVideo => {
  const result: MakerVideo = {
    title: item.title,
    short_description: item.short_description,
    long_description: item.long_description,
    videoLink: item.videoLink,
    maker: item.maker,
    image: item.image,
    slug: toSlug(item.title),
    date: item.date
  };
  result.image = getVideoImageSource(result, directory);
  return result;
};

@Injectable({
  providedIn: 'root'
})
export class MakerVideoResolverService implements Resolve<MakerVideo> {

  mdPath = '';
  directory = 'assets/content/maker-videos';

  constructor(private contentService: ContentService) { }

  resolve(route: Params): Observable<MakerVideo> {
    const { slug } = route.params;
    this.mdPath = `maker-videos/${slug}`;
    return this.getResult(this.mdPath);
  }

  getResult(mdPath: string): Observable<MakerVideo> {
    return this.contentService.getContent<Params>(mdPath).pipe(
      take(1),
      map((item: Params) => toMakerVideo(item))
    );
  }
}
