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
  itemsToDisplay = 3;
  highlightBody = '';
  discoverItems: DiscoverItem[] = [];
  displayItems: DiscoverItem[] = [];
  carouselItems: {sm: string, lg: string, title: string}[] = [];

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
    this.displayItems = items.splice(0, this.itemsToDisplay);
  }

  moreMacroscopes(): boolean {
    return this.itemsToDisplay < this.discoverItems.length;
  }

  showMoreMacroscopes(): void {
    this.itemsToDisplay = this.itemsToDisplay + 3;
    this.updateDisplayItems();
  }
}
