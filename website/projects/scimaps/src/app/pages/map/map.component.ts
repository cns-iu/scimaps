import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MapItem } from '../../core/models/discover-item';

@Component({
  selector: 'sci-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  selectedItem!: MapItem;

  currentLanguage = 'en';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.selectedItem = data.map;
    });
  }

  changeLanguage(language: string): void {
    this.currentLanguage = language;
  }
}
