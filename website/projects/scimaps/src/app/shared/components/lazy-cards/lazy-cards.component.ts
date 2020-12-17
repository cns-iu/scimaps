import { Component, HostBinding, Input } from '@angular/core';
import { Venue } from '../../../core/models/venue';

@Component({
  selector: 'sci-lazy-cards',
  templateUrl: './lazy-cards.component.html',
  styleUrls: ['./lazy-cards.component.scss']
})
export class LazyCardsComponent {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-lazy-cards';

  @Input() data!: Venue[];
  ITEMS_TO_DISPLAY_INCREMENT = 6;
  itemsToDisplay = 6;

  get displayItems(): Venue[] {
    return this.data.slice(0, this.itemsToDisplay);
  }

  get moreItemsToDisplay(): boolean {
    return this.itemsToDisplay < this.data.length;
  }

  goToLink(link: string): void {
    window.open(link, '_blank');
  }

  showMore(): void {
    this.itemsToDisplay = this.itemsToDisplay + this.ITEMS_TO_DISPLAY_INCREMENT;
  }
}
