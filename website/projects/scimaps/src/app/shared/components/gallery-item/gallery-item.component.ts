import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Params } from '@angular/router';

import { Venue } from '../../../pages/venues/venues-resolver.service';

@Component({
  selector: 'sci-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit {

  @Input() item!: Params | Venue;
  @Output() closed: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  showOverlay = false;
  overlayImage = '';
  ngOnInit(): void {
  }

  closeDrawer(): void {
    this.closed.emit('close');
  }
}
