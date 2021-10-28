import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { drawerInOut } from '../../../constants/drawer.animations';
import { Blog } from '../../../pages/learning-center/blogs-resolver.service';

@Component({
  selector: 'sci-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  animations: [drawerInOut],
})
export class BlogComponent implements OnInit {
  showDrawer = false;
  blog!: Blog;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.showDrawer = true;
    const {blog} = this.route.snapshot.data;
    if (blog) {
      this.blog = blog;
    }
  }

  goBack() {
    this.showDrawer = false;
    setTimeout(() => {
      this.router.navigate(['/', 'learning-center', 'blogs']);
    }, 500);
  }
}
