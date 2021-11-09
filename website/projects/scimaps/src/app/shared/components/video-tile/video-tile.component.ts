import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MakerVideo } from '../../../pages/maker-videos/maker-videos-resolver.service';

@Component({
  selector: 'sci-video-tile',
  templateUrl: './video-tile.component.html',
  styleUrls: ['./video-tile.component.scss']
})
export class VideoTileComponent implements OnInit {

  @Input() video!: MakerVideo;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  gotoVideo(): void {
    if (this.video) {
      this.router.navigate([this.video.slug], {relativeTo: this.route});
    }
  }
}
