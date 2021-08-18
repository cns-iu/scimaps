import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ContentService } from '../../shared/services/content.service';



export interface MakerVideosBody {
  description: string;
}
@Injectable({
  providedIn: 'root'
})
export class MakerVideosBodyResolverService implements Resolve<MakerVideosBody> {

  constructor(private content: ContentService) { }
  mdPath = 'site/maker-videos/maker-videos.md';
  resolve(): Observable<MakerVideosBody> {
    return this.content.getContent<MakerVideosBody>(this.mdPath).pipe(
      take(1)
    );
  }
}
