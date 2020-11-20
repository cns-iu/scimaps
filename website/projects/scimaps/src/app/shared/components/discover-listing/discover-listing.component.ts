import { Component, HostBinding, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DiscoverItem } from '../../../core/models/discover-item';
import { WarningDialogComponent } from '../warning-dialog/warning-dialog.component';

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

  constructor(private readonly dialog: MatDialog) { }

  imageSource(image: string): string {
    return `assets/${this.discoverItem.directory}/${this.discoverItem.slug}/${image}`;
  }

  mobileThumbnailClickHandler(link: string): void {
    this.dialog.open(WarningDialogComponent, {
      width: '95%',
      data: {
        warningMessage: this.mobileWarning,
        closeLink: link
      }
    });
  }

  desktopThumbnailClickHandler(link: string): void {
    window.open(link, '_blank');
  }
}
