import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { drawerInOut } from '../../constants/drawer.animations';

import { DiscoverItem, ThumbnailLink } from '../../core/models/discover-item';


@Component({
  selector: 'sci-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
  animations: [drawerInOut]
})
export class MapsComponent implements OnInit {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-maps';

  showModal = false;
  highlightBody = '';
  discoverItems: DiscoverItem[] = [];
  displayItems: DiscoverItem[] = [];
  highlightCarouselItems: ThumbnailLink[] = [];
  displayLimit = 3
  showAllItems = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.highlightBody = data.body.body;
      this.discoverItems = data.maps;
      this.highlightCarouselItems = this.discoverItems
        .reduce((acc, item) => {
          const thumbs = item.thumbnails;
          const randomThumbnailIndex = Math.round(Math.random() * (thumbs.length - 1));
          return acc.concat(thumbs[randomThumbnailIndex]);
        }, [] as ThumbnailLink[]);

      this.updateDisplayItems();
    });
  }

  updateDisplayItems(): void {
    const items: DiscoverItem[] = [...this.discoverItems];
    this.displayItems = items;
  }
}
