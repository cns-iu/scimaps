import { Component, HostBinding, Input } from '@angular/core';
import { DiscoverItem } from '../../../core/models/discover-item';

@Component({
  selector: 'sci-discover-listing',
  templateUrl: './discover-listing.component.html',
  styleUrls: ['./discover-listing.component.scss']
})
export class DiscoverListingComponent {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-discover-listing';

  @Input() discoverItem!: DiscoverItem;

  imageSource(image: string): string {
    return `assets/${this.discoverItem.directory}/${this.discoverItem.slug}/${image}`;
  }
}
