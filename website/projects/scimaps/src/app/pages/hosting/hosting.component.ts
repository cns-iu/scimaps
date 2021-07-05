import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardLinkItem } from '../../core/models/card-link-item';

@Component({
  selector: 'sci-hosting',
  templateUrl: './hosting.component.html',
  styleUrls: ['./hosting.component.scss']
})
export class HostingComponent implements OnInit {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-hosting';


  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.route
    console.log(this.route);
  }
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
