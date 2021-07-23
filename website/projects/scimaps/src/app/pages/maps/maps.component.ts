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
  carouselItems: {sm: string, lg: string, title: string}[] = [];
  displayLimit = 3;
  showAllItems = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      const {body, maps} = data;
      if (body) {
        this.highlightBody = body.body;
      }
      this.discoverItems = maps;
      if (body.carousel) {
        this.carouselItems = body.carousel;
      }
      console.log(this.carouselItems);
      this.updateDisplayItems();
    });
  }

  updateDisplayItems(): void {
    const items: DiscoverItem[] = [...this.discoverItems];
    this.displayItems = items;
  }
}
