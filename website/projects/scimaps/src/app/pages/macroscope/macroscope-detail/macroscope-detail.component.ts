import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { drawerInOut } from '../../../constants/drawer.animations';

@Component({
  selector: 'sci-macroscope-detail',
  templateUrl: './macroscope-detail.component.html',
  styleUrls: ['./macroscope-detail.component.scss'],
  animations: [drawerInOut]
})
export class MacroscopeDetailComponent implements OnInit {

  showOverlay = false;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.showOverlay = true;

  }

  close(): void {
    this.showOverlay = false;
    setTimeout(() => {
      this.router.navigate(['../'], {relativeTo: this.route});
    }, 500);
  }
}
