import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { getSegmentedDate } from '../../../constants/utils';
import { Blog } from '../../../pages/blogs/blogs-resolver.service';
@Component({
  selector: 'sci-blog-tile',
  templateUrl: './blog-tile.component.html',
  styleUrls: ['./blog-tile.component.scss']
})
export class BlogTileComponent {

  @Input() blog!: Blog;

  constructor(private router: Router) { }

  get thumbnail(): string {
    if (this.blog && this.blog.blogImages.length) {
      return this.blog.blogImages[0].sm;
    } else {
      return '';
    }
  }
  gotoBlog(): void {
    if (this.blog) {
      const [year, month, date] = getSegmentedDate(this.blog.date);
      this.router.navigate(['/', 'learning-center', 'blogs', year, `${month}-${date}`, this.blog.slug]);
    }
  }
}
