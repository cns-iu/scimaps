import { Component, HostBinding, Input } from '@angular/core';
import { CardLinkItem } from '../../../core/models/card-link-item';

@Component({
  selector: 'sci-card-link',
  templateUrl: './card-link.component.html',
  styleUrls: ['./card-link.component.scss']
})
export class CardLinkComponent {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-card-link';

  @Input() cardData!: CardLinkItem;

  goToLink(): void {
    window.open(this.cardData.link, '_blank');
  }

  get imageUrl(): string {
    return `url('${this.cardData.imageSource}')`;
  }
}
