import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MakerVideosBody } from './maker-videos-body-resolver.service';

@Component({
  selector: 'sci-maker-videos',
  templateUrl: './maker-videos.component.html',
  styleUrls: ['./maker-videos.component.scss']
})
export class MakerVideosComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  body: MakerVideosBody = { description: ''};
  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.body = data.body;
    });
  }

}
