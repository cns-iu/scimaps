import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { drawerInOut } from '../../../constants/drawer.animations';
import { Venue } from '../../../pages/venues/venues-resolver.service';

@Component({
  selector: 'sci-venue-gallery',
  templateUrl: './venue-gallery.component.html',
  styleUrls: ['./venue-gallery.component.scss'],
  animations: [drawerInOut]
})
export class VenueGalleryComponent implements OnInit {
  showOverlay = false;
  overlayImage = '';
  show = false;
  item!: Venue;
  activeIndex = -1;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.show = true;
    this.item = this.route.snapshot.data.venue;
  }

  closeDrawer(): void {
    this.show = false;
    setTimeout(() => {
      this.router.navigate(['/', 'venues']);
    }, 500);
  }

  left(): void {
    this.activeIndex = this.activeIndex - 1;
    if (this.activeIndex < 0) {
      this.activeIndex = this.item.venueImages.length - 1;
    }
    this.overlayImage = this.item.venueImages[this.activeIndex].lg;
  }
  right(): void {
    this.activeIndex = (this.activeIndex + 1) % (this.item.venueImages.length);
    this.overlayImage = this.item.venueImages[this.activeIndex].lg;
  }
}
