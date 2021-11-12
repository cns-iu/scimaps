import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MakerVideo } from '../../../pages/maker-videos/maker-videos-resolver.service';

@Component({
  selector: 'sci-video-tile',
  templateUrl: './video-tile.component.html',
  styleUrls: ['./video-tile.component.scss']
})
export class VideoTileComponent implements OnInit {

  @Input() video!: MakerVideo;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoVideo(): void {
    if (this.video) {
      this.router.navigate(['/', 'learning-center', 'maker-videos', this.video.slug]);
    }
  }
}
