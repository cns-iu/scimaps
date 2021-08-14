import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { MakerVideosBody } from './maker-videos-body-resolver.service';
import { MakerVideo } from './maker-videos-resolver.service';

@Component({
  selector: 'sci-maker-videos',
  templateUrl: './maker-videos.component.html',
  styleUrls: ['./maker-videos.component.scss']
})
export class MakerVideosComponent implements OnInit {

  body: MakerVideosBody = { description: ''};
  videos: MakerVideo[] = [];
  // 
  showOverlay = false;
  overlayVideo = '';

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }
  
  ngOnInit(): void {
    this.route.data.subscribe((data: Params) => {
      const {body, videos} = data;
      if (body) {
        this.body = body;
      }
      if (videos && Array.isArray(videos)) {
        this.videos = videos
      }
    });
  }

}
