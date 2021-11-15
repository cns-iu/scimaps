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
  }
  setBlogs(blogs: Blog[]): void {
    if (Array.isArray(blogs) && blogs.length) {
      this.blogs = blogs;
      const { type, slug } = this.body.featured;
      if (type === 'blog' && slug) {
        this.featuredBlog = this.blogs[0];
        const foundIndex = this.blogs.findIndex(item => item.slug === slug);
        if (foundIndex >= 0) {
          this.featuredBlog = this.blogs[foundIndex];
        }
      }
    }
  }
  setVideos(videos: MakerVideo[]): void {
    if (Array.isArray(videos) && videos.length) {
      this.videos = videos;
      const { type, slug } = this.body.featured;
      if (type === 'video' && slug) {
        this.featuredVideo = this.videos[0];
        const foundIndex = this.videos.findIndex(item => item.slug === slug);
        if (foundIndex >= 0) {
          this.featuredVideo = this.videos[foundIndex];
        }
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
