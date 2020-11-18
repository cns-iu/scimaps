import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DiscoverItem, ThumbnailLink } from '../../../core/models/discover-item';
import { WarningDialogComponent } from '../warning-dialog/warning-dialog.component';

@Component({
  selector: 'sci-discover-listing',
  templateUrl: './discover-listing.component.html',
  styleUrls: ['./discover-listing.component.scss']
})
export class DiscoverListingComponent implements OnInit {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-discover-listing';

  @Input() discoverItem!: DiscoverItem;
  public screenWidth = 0;
  mobileScreenSize = 640;
  mobileWarning = 'Macroscopes work best on desktop or larger tablet screens.  You may have a less than optimal experience on this device.';

  constructor(private readonly dialog: MatDialog) { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.screenWidth = window.innerWidth;
  }

  imageSource(image: string): string {
    return `assets/${this.discoverItem.directory}/${this.discoverItem.slug}/${image}`;
  }

  thumbnailClickHandler(thumbnail: ThumbnailLink): void {
    if (this.screenWidth <= this.mobileScreenSize) {
      this.dialog.open(WarningDialogComponent, {
        width: '95%',
        data: {
          warningMessage: this.mobileWarning,
          closeLink: thumbnail.link
        }
      });
    } else {
      window.open(thumbnail.link, '_blank');
    }
  }
}
