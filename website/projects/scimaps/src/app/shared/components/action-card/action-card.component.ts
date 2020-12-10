import { Component, HostBinding, Input } from '@angular/core';
import { ActionCardItem } from '../../../core/models/action-card-item';

@Component({
  selector: 'sci-action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.scss']
})
export class ActionCardComponent {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-action-card';

  @Input() actionItem!: ActionCardItem;
  closed = false;

  get imageUrl(): string {
    return `url('${this.actionItem.imageSource}')`;
  }

  goToLink(link: string): void {
    window.open(link, '_blank');
  }
}
