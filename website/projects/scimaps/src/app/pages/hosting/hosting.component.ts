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
  activePageTab = 0;
  tabs = []
  tabHeaders: string[] = [];
  tabContents: string[] = [];
  showDrawer = false;
  ngOnInit() {
    // this.route
    this.route.data.subscribe(({body}) => {
      // Tabs
      const { tabs } = body;
      if (tabs && Array.isArray(tabs)) {
        tabs.forEach((tab: {header: string, content: string}) => {
          this.tabHeaders.push(tab.header);
          this.tabContents.push(tab.content);
        });
      }
      // Other keys
      ({ overview: this.overviewText,
        install_guide: this.installGuide,
        master_booklet: this.masterBooklet,
        carousel: this.carouselImages,
        banner_text: this.bannerText,
        tabs: this.tabs
      } = this.getBodyContent(body));
    });
  }

  getBodyContent(body: Params): Params {
    const result: Params = {};
    const keys = ['overview', 'carousel', 'install_guide', 'master_booklet', 'banner_text']
    keys.forEach((key: string) => {
      if (body.hasOwnProperty(key) && body[key]) {
        result[key] = body[key];
      }
    });
    return result;
  }

  updateActivePageTab(index: number) {
    this.activePageTab = index;
  }
}
