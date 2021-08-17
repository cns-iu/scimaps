import { Component, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DiscoverItem } from '../../../core/models/discover-item';
import { WarningDialogComponent } from '../warning-dialog/warning-dialog.component';
import { contentTrigger } from '../../../constants/content-trigger';

@Component({
  selector: 'sci-discover-listing',
  templateUrl: './discover-listing.component.html',
  styleUrls: ['./discover-listing.component.scss'],
  animations: [contentTrigger]
})
export class DiscoverListingComponent {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-discover-listing';

  @Input() discoverItem!: DiscoverItem;
  mobileWarning = 'Macroscopes work best on desktop or larger tablet screens.  You may have a less than optimal experience on this device.';

  /** Type of discover list */
  @Input() type!: 'macroscopes' | 'maps';

  fullContentVisible = false;
  maxContentLength = 500;

  constructor(private readonly dialog: MatDialog, private router: Router) { }

  get hasLongContent(): boolean {
    return (this.discoverItem?.body?.length || 0) > this.maxContentLength;
  }

  get fullContent(): string {
    return this.discoverItem.body;
  }

  get partialContent(): string {
    const {
      fullContent,
      maxContentLength
    } = this;
    return `${fullContent.slice(0, maxContentLength)} ${this.hasLongContent ? '...' : ''}`;
  }

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
