import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { drawerInOut } from '../../constants/drawer.animations';
import { CardLinkItem } from '../../core/models/card-link-item';
import { HostingBody } from './hosting-body-resolver.service';

@Component({
  selector: 'sci-hosting',
  templateUrl: './hosting.component.html',
  styleUrls: ['./hosting.component.scss'],
  animations: [drawerInOut]
})
export class HostingComponent implements OnInit {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-hosting';

  get tabHeaders(): string[] {
    return this.tabs.map((tab: {header: string}) => tab.header);
  }
  constructor(private route: ActivatedRoute) {
  }
  overviewText = 'Hello';
  carouselImages: {lg: string, sm: string, title: string}[] = [];
  installGuide = '';
  masterBooklet = '';
  bannerText = '';
  activePageTab = 0;
  tabs = [];
  showDrawer = false;

  // 
  lms = [
    {
    title: 'Hello',
    content: 'Content',
    image: { sm: 'assets/content/site/hosting/image1.med.jpg',
        lg: 'assets/content/site/hosting/image1.lg.jpg'
      }
    },
    {
      title: 'Hello 2',
      content: 'Content 2',
      image: { sm: 'assets/content/site/hosting/image1.med.jpg',
          lg: 'assets/content/site/hosting/image1.lg.jpg'
        },
      },
      {
        title: 'Hello',
        content: 'Content',
        image: { sm: 'assets/content/site/hosting/image1.med.jpg',
            lg: 'assets/content/site/hosting/image1.lg.jpg'
          }
        },
        {
          title: 'Hello 2',
          content: 'Content 2',
          image: { sm: 'assets/content/site/hosting/image1.med.jpg',
              lg: 'assets/content/site/hosting/image1.lg.jpg'
            },
          }
  ]
  ngOnInit() {
    // this.route
    this.route.data.subscribe(({body}) => {
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
    const keys = ['overview', 'tabs', 'carousel', 'install_guide', 'master_booklet', 'banner_text']
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
