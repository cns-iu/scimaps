import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { drawerInOut } from '../../../constants/drawer.animations';
import { MakerVideo } from '../../../pages/maker-videos/maker-videos-resolver.service';

@Component({
  selector: 'sci-maker-video',
  templateUrl: './maker-video.component.html',
  styleUrls: ['./maker-video.component.scss'],
  animations: [drawerInOut]
})
export class MakerVideoComponent implements OnInit {

  showOverlay = false;
  video!: MakerVideo;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.showOverlay = true;
    const {slug} = this.route.snapshot.params;
    const videos= this.route.parent?.snapshot.data?.videos;
    if (Array.isArray(videos)) {
      const video = videos.find(video => video.slug == slug);
      if (video) {
        this.video = video;
      }
    }
  }

}
