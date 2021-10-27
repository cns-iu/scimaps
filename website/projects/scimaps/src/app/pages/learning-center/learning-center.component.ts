import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Blog } from './blogs-resolver.service';
import { LearningCenterBody } from './learning-center-body-resolver.service';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'sci-learning-center',
  templateUrl: './learning-center.component.html',
  styleUrls: ['./learning-center.component.scss']
})
export class LearningCenterComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  body!: LearningCenterBody;
  blogs: Blog[] = [];

  sections = ['Blogs', 'Videos']

  ngOnInit(): void {
    const {data} = this.activatedRoute.snapshot;
    const {body, blogs} = data;
    if (body) {
      this.body = body;
    }
    if (Array.isArray(blogs) && blogs.length) {
      this.blogs = blogs.slice(0, 3);
    }
  }

}
