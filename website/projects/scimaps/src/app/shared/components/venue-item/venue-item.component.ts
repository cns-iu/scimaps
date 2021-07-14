import { Component, Input, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { Venue } from '../../../pages/venues/venues-resolver.service';

@Component({
  selector: 'sci-venue-item',
  templateUrl: './venue-item.component.html',
  styleUrls: ['./venue-item.component.scss']
})
export class VenueItemComponent implements OnInit {

  @Input() item!: Venue | Params;

  constructor() { }

  ngOnInit(): void {
  }

}
