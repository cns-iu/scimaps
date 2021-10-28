import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { drawerInOut } from '../../constants/drawer.animations';
import { getSegmentedDate } from '../../constants/utils';
import { Blog } from '../learning-center/blogs-resolver.service';

@Component({
  selector: 'sci-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
  animations: [drawerInOut]
})
export class BlogsComponent implements OnInit {

  blogs: Blog[] = [];
  showDrawer = false;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const snapshot = this.activatedRoute.snapshot;
    const { blogs } = snapshot.data;
    if (Array.isArray(blogs) && blogs.length) {
      this.blogs = blogs;
    }
    this.showDrawer = true;
  }

  goBack() {
    this.showDrawer = false;
    setTimeout(() => {
      this.router.navigate(['/', 'learning-center']);
    }, 500);
  }

  gotoBlog(index: number) {
    const blog = this.blogs[index];
    const  [year, month, date] = getSegmentedDate(blog.date);
    this.router.navigate(['/', 'learning-center', 'blogs', year, `${month}-${date}`, blog.slug])
  }
}
