import { Component, Input, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { Store } from '@ngxs/store';
import { SetAppState } from '../../../core/actions/app.actions';
import { Venue } from '../../../pages/venues/venues-resolver.service';

@Component({
  selector: 'sci-venue-item',
  templateUrl: './venue-item.component.html',
  styleUrls: ['./venue-item.component.scss']
})
export class VenueItemComponent implements OnInit {

  @Input() item!: Venue | Params;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  openDrawer(item: Venue | Params) {
    this.store.dispatch(new SetAppState({drawer: {
      showDrawer: true,
      drawerName: 'venue-gallery',
      drawerPayload: item as Params
    }}));
  }
}
