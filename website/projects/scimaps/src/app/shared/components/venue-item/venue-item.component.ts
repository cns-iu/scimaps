import { Component, Input } from '@angular/core';
import { Params, Router } from '@angular/router';
import { getSegmentedDate } from '../../../constants/utils';
import { Venue } from '../../../pages/venues/venues-resolver.service';

@Component({
  selector: 'sci-venue-item',
  templateUrl: './venue-item.component.html',
  styleUrls: ['./venue-item.component.scss']
})
export class VenueItemComponent {

  @Input() item!: Venue | Params;

  constructor(private router: Router) { }

  gotoGallery(item: Venue | Params): void {
    const [year, month, date] = getSegmentedDate(item.dateStart);
    this.router.navigate(['/', 'venues', 'gallery', year, `${month}-${date}`, item.slug]);
  }

  openLink(link: string) {
    if (link) {
      window.open(link, '_blank');
    }
  }
}
