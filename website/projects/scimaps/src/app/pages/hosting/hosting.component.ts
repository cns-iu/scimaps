import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CardLinkItem } from '../../core/models/card-link-item';
import { HostingBody } from './hosting-body-resolver.service';

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
  overviewText = 'Hello';
  carouselImages: {lg: string, sm: string, title: string}[] = [];
  installGuide = '';
  masterBooklet = '';
  bannerText = '';
  tabs = []
  ngOnInit() {
    // this.route
    this.route.data.subscribe(({body}) => {
      ({ overview: this.overviewText,
        install_guide: this.installGuide,
        master_booklet: this.masterBooklet,
        carousel: this.carouselImages,
        banner_text: this.bannerText,
        tabs: this.tabs
      } = this.getBodyContent(body));
    });
    console.log(this.carouselImages);
  }

  getBodyContent(body: Params): Params {
    const result: Params = {};
    const keys = ['overview', 'carousel', 'install_guide', 'master_booklet', 'tabs', 'banner_text']
    keys.forEach((key: string) => {
      if (body.hasOwnProperty(key) && body[key]) {
        result[key] = body[key];
      }
    });
    return result;
  }
  // testCards: CardLinkItem[] = [
  //   {
  //     label: 'Humanexus',
  //     imageSource: 'assets/images/benches.jpg',
  //     link: 'www.google.com'
  //   },
  //   {
  //     label: 'WorldProcessor Globes',
  //     imageSource: 'assets/images/bridge.jpg',
  //     link: 'www.github.com'
  //   }
  // ];
}
