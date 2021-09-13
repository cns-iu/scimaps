import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { drawerInOut } from '../../constants/drawer.animations';
import { MakerVideosBody } from './maker-videos-body-resolver.service';
import { MakerVideo } from './maker-videos-resolver.service';

@Component({
  selector: 'sci-maker-videos',
  templateUrl: './maker-videos.component.html',
  styleUrls: ['./maker-videos.component.scss'],
  animations: [drawerInOut]
})
export class MakerVideosComponent implements OnInit {

  body: MakerVideosBody = { description: ''};
  videos: MakerVideo[] = [];
  //
  showOverlay = false;
  selectedItem: MakerVideo | null = null;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: Params) => {
      const {body, videos} = data;
      if (body) {
        this.body = body;
      }
      if (videos && Array.isArray(videos)) {
        this.videos = videos;
      }
    });
  }

  gotoVideo(slug: string) {
    this.router.navigate([slug], {relativeTo: this.route});
  }

}
