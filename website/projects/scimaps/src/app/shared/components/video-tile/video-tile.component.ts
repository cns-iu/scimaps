import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MakerVideo } from '../../../pages/maker-videos/maker-videos-resolver.service';

@Component({
  selector: 'sci-video-tile',
  templateUrl: './video-tile.component.html',
  styleUrls: ['./video-tile.component.scss']
})
export class VideoTileComponent {

  @Input() video!: MakerVideo;

  constructor(private router: Router) { }

  gotoVideo(): void {
    if (this.video) {
      this.router.navigate(['/', 'learning-center', 'maker-videos', this.video.slug]);
    }
  }
}
