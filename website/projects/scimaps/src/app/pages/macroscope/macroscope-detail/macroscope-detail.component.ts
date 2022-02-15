import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { drawerInOut } from '../../../constants/drawer.animations';
import { MapMacroscopeItem } from '../../../core/models/discover-item';

@Component({
  selector: 'sci-macroscope-detail',
  templateUrl: './macroscope-detail.component.html',
  styleUrls: ['./macroscope-detail.component.scss'],
  animations: [drawerInOut]
})
export class MacroscopeDetailComponent implements OnInit {

  showOverlay = false;
  item!: MapMacroscopeItem;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.showOverlay = true;
    const parentSnapshot = this.route.parent?.snapshot;
    const macroscope = parentSnapshot?.data.macroscope;
    this.item = macroscope;
  }

  close(): void {
    this.showOverlay = false;
    setTimeout(() => {
      this.router.navigate(['../'], {relativeTo: this.route});
    }, 500);
  }
}
