import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { ContentService } from '../../shared/services/content.service';

import { DiscoverItem, MapItem } from '../../core/models/discover-item';

@Component({
  selector: 'sci-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  
  discoverItems!: DiscoverItem[];

  displayItems: DiscoverItem[] = [];

  selectedItem: MapItem = {
    title: 'Sample Map Item',
    makers: ['Homer Simpson', 'Elon Musk'],
    location: 'Springfield',
    credit: 'Credit line text',
    year: '2000',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci. Nulla vitae mauris nisi. Aenean orci ipsum, scelerisque et arcu quis, molestie efficitur dui. Curabitur enim lacus, vehicula at arcu id, sagittis posuere est. Maecenas laoreet est eget tristique interdum. Fusce consequat, nisl ac bibendum facilisis, tellus nulla blandit orci, quis dignissim est mi ac justo. Pellentesque ultrices blandit diam quis pretium. Suspendisse ut ante in enim consequat semper id consectetur arcu. Proin ultricies vestibulum nulla sit amet.',
    references: [
      'Reference 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        'Fusce non dui euismod mauris faucibus euismod non lacinia quam.',
      'Reference 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        'Fusce non dui euismod mauris faucibus euismod non lacinia quam.',
      'Reference 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
        'Fusce non dui euismod mauris faucibus euismod non lacinia quam.'
    ],
    thumbnail: 'assets/maps/maps-2019/rose.jpg'
  };;


  constructor(private route: ActivatedRoute, private content: ContentService) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      // this.discoverItems = data.maps;
      this.selectedItem = data.map;
    });
  }
}
