import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { drawerInOut } from '../../../constants/drawer.animations';

@Component({
  selector: 'sci-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  animations: [drawerInOut],
})
export class BlogComponent implements OnInit {
  showDrawer = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.showDrawer = true;
  }

  goBack() {
    this.showDrawer = false;
    setTimeout(() => {
      this.router.navigate(['/', 'learning-center', 'blogs']);
    }, 500);
  }
}
