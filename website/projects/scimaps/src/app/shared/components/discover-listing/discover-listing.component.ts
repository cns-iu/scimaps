import { Component, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';
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

  @Input() type!: 'macroscopes' | 'maps';

  constructor(private readonly dialog: MatDialog, private router: Router) { }

  imageSource(image: string): string {
    return image.startsWith('assets/') ? image : `assets/${this.discoverItem.directory}/${this.discoverItem.slug}/${image}`;
  }

  mobileThumbnailClickHandler(link: string): void {
    if (this.type === 'macroscopes') {
      this.dialog.open(WarningDialogComponent, {
        width: '95%',
        data: {
          warningMessage: this.mobileWarning,
          closeLink: link
        }
      });
    } else {
      this.router.navigate(['/', ...link.split('/')]);
    }
  }

  desktopThumbnailClickHandler(link: string): void {
    this.router.navigate(['/', ...link.split('/')]);
  }
}
