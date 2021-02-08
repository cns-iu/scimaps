import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DiscoverItem, ThumbnailLink } from '../../core/models/discover-item';


@Component({
  selector: 'sci-macroscopes',
  templateUrl: './macroscopes.component.html',
  styleUrls: ['./macroscopes.component.scss']
})
export class MacroscopesComponent implements OnInit {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-macroscopes';

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
      this.discoverItems = data.macroscopes;
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

  moreMacroscopes(): boolean {
    return this.itemsToDisplay < this.discoverItems.length;
  }

  showMoreMacroscopes(): void {
    this.itemsToDisplay = this.itemsToDisplay + 3;
    this.updateDisplayItems();
  }
}
