import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { drawerInOut } from '../../constants/drawer.animations';

import { DiscoverItem, ThumbnailLink } from '../../core/models/discover-item';


@Component({
  selector: 'sci-macroscopes',
  templateUrl: './macroscopes.component.html',
  styleUrls: ['./macroscopes.component.scss'],
  animations: [drawerInOut]
})
export class MacroscopesComponent implements OnInit {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-macroscopes';

  showModal = false;
  highlightBody = '';
  discoverItems: DiscoverItem[] = [];
  displayItems: DiscoverItem[] = [];
  carouselItems: {sm: string, lg: string, title: string}[] = [];
  showAllItems = false;
  displayLimit = 3;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      const {body, macroscopes} = data;
      this.discoverItems = macroscopes;
      if (body) {
        this.highlightBody = body.body;
      }
      if (body.carousel) {
        this.carouselItems = body.carousel;
      }
      this.updateDisplayItems();
    });
  }

  updateDisplayItems(): void {
    const items: DiscoverItem[] = [...this.discoverItems];
    this.displayItems = items;
  }
}
