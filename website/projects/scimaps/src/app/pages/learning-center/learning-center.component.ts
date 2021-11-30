import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { drawerInOut } from '../../constants/drawer.animations';
import { Blog } from '../blogs/blogs-resolver.service';
import { MakerVideo } from '../maker-videos/maker-videos-resolver.service';
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
  featuredBlog: Blog | undefined;
  featuredVideo: MakerVideo | undefined;

  ngOnInit(): void {
    const { data } = this.activatedRoute.snapshot;
    const { body, blogs, videos } = data;
    if (body) {
      this.body = body;
    }

    this.setBlogs(blogs);
    this.setVideos(videos);
    // Set featured
    this.setFeatured();
  }

  setBlogs(blogs: Blog[]): void {
    if (Array.isArray(blogs) && blogs.length) {
      this.blogs = blogs;
    }
  }

  setVideos(videos: MakerVideo[]): void {
    if (Array.isArray(videos) && videos.length) {
      this.videos = videos;
    }
  }

  setFeatured() {
    const { type } = this.body.featured;
    if (type === 'video') {
      const { featuredVideo } = this.body;
      if (featuredVideo) {
        this.featuredVideo = featuredVideo
      } else {
        this.featuredVideo = this.videos[0];
      }
    } else {
      const { featuredBlog } = this.body;
      if (featuredBlog) {
        this.featuredBlog = featuredBlog
      } else {
        this.featuredBlog = this.blogs[0];
      }
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
