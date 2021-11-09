import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { drawerInOut } from '../../constants/drawer.animations';
import { MakerVideo } from '../maker-videos/maker-videos-resolver.service';
import { Blog } from '../blogs/blogs-resolver.service';
import { LearningCenterBody } from './learning-center-body-resolver.service';
@Component({
  selector: 'sci-learning-center',
  templateUrl: './learning-center.component.html',
  styleUrls: ['./learning-center.component.scss'],
  animations: [drawerInOut]
})
export class LearningCenterComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }
  body!: LearningCenterBody;
  blogs: Blog[] = [];
  videos: MakerVideo[] = [];
  itemsPerRow = 4;
  ngOnInit(): void {
    const { data } = this.activatedRoute.snapshot;
    const { body, blogs, videos } = data;
    if (body) {
      this.body = body;
    }
    if (Array.isArray(blogs) && blogs.length) {
      this.blogs = blogs;
    }
    if (Array.isArray(videos) && videos.length) {
      this.videos = videos;
    }
  }

  goto(page: string): void {
    if (page === 'blogs') {
      this.router.navigate(['/', 'learning-center', 'blogs']);
    } else if (page === 'videos') {
      this.router.navigate(['/', 'learning-center', 'maker-videos']);
    }
  }
}
