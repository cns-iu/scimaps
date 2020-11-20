import { Component, HostBinding, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DiscoverItem, ThumbnailLink } from './discover-item';

@Component({
  selector: 'sci-discover-listing',
  templateUrl: './discover-listing.component.html',
  styleUrls: ['./discover-listing.component.scss']
})
export class DiscoverListingComponent {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-discover-listing';

  @Input() discoverItem!: DiscoverItem;
  mobileWarning = 'Macroscopes work best on desktop or larger tablet screens.  You may have a less than optimal experience on this device.';

  @Output() openDrawer = new EventEmitter();

  constructor(private readonly dialog: MatDialog) { }

  imageSource(image: string): string {
    return `assets/${this.discoverItem.directory}/${this.discoverItem.slug}/${image}`;
  }

  thumbnailClickHandler(thumbnail: ThumbnailLink): void {
    this.openDrawer.emit();
  }
}
