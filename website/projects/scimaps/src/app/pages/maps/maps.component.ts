import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DiscoverItem, ThumbnailLink } from '../../core/models/discover-item';


@Component({
  selector: 'sci-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-maps';

  showModal = false;
  itemsToDisplay = 3;
  highlightBody = '';
  discoverItems: DiscoverItem[] = [];
  displayItems: DiscoverItem[] = [];
  highlightCarouselItems: ThumbnailLink[] = [];

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
    this.displayItems = items.splice(0, this.itemsToDisplay);
  }

  moreMaps(): boolean {
    return this.itemsToDisplay < this.discoverItems.length;
  }

  showMoreMaps(): void {
    this.itemsToDisplay = this.itemsToDisplay + 3;
    this.updateDisplayItems();
  }
}
