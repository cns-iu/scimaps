import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MapMacroscopeItem } from '../../core/models/discover-item';

@Component({
  selector: 'sci-macroscope',
  templateUrl: './macroscope.component.html',
  styleUrls: ['./macroscope.component.scss']
})
export class MacroscopeComponent implements OnInit {

  selectedItem!: MapMacroscopeItem;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.selectedItem = data.macroscope;
    });
  }
}
