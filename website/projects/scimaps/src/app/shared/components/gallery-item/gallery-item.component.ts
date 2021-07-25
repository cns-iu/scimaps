import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Params } from '@angular/router';
import { Venue } from '../../../pages/venues/venues-resolver.service';


@Component({
  selector: 'sci-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent {

  @Input() item!: Params | Venue;
  @Output() closed: EventEmitter<string> = new EventEmitter<string>();

  showOverlay = false;
  overlayImage = '';

  closeDrawer(): void {
    this.closed.emit('close');
  }
}
