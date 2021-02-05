import { Component, HostBinding } from '@angular/core';
import { CardLinkItem } from '../../core/models/card-link-item';

@Component({
  selector: 'sci-hosting',
  templateUrl: './hosting.component.html',
  styleUrls: ['./hosting.component.scss']
})
export class HostingComponent {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-hosting';

  testCards: CardLinkItem[] = [
    {
      label: 'Humanexus',
      imageSource: 'assets/images/benches.jpg',
      link: 'www.google.com'
    },
    {
      label: 'WorldProcessor Globes',
      imageSource: 'assets/images/bridge.jpg',
      link: 'www.github.com'
    }
  ];
}
