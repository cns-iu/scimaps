import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.showOverlay = true;
    const {slug} = this.route.snapshot.params;
    const videos = this.route.parent?.snapshot.data?.videos;
    if (Array.isArray(videos)) {
      const video = videos.find(item => item.slug === slug);
      if (video) {
        this.video = video;
      }
    }
  }

  close(): void {
    this.showOverlay = false;
    setTimeout(() => {
      this.router.navigate(['/', 'learning-center', 'maker-videos']);
    }, 500);
  }

}
