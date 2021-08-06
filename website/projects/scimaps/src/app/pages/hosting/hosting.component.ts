import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { drawerInOut } from '../../constants/drawer.animations';
import { LearningMaterial } from './learning-materials-resolver.service';

@Component({
  selector: 'sci-hosting',
  templateUrl: './hosting.component.html',
  styleUrls: ['./hosting.component.scss'],
  animations: [drawerInOut],
})
export class HostingComponent implements OnInit {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-hosting';

  learningMaterials: LearningMaterial[] = [];
  get tabHeaders(): string[] {
    return this.tabs.map((tab: { header: string }) => tab.header);
  }
  constructor(private route: ActivatedRoute) {}
  overviewText = 'Hello';
  carouselImages: { lg: string; sm: string; title: string }[] = [];
  installGuide = '';
  masterBooklet = '';
  bannerText = '';
  activePageTab = 0;
  tabs: { header: string; content: string; image: string }[] = [];
  showTab = false; // maintains drawer show/hide for tab

  ngOnInit(): void {
    // this.route
    this.route.data.subscribe((data) => {
      // Other keys
      const { body, learningMaterials } = data;
      if (learningMaterials) {
        this.learningMaterials = learningMaterials;
      }
      ({
        overview: this.overviewText,
        install_guide: this.installGuide,
        master_booklet: this.masterBooklet,
        carousel: this.carouselImages,
        banner_text: this.bannerText,
        tabs: this.tabs,
      } = this.getBodyContent(body));
    });
  }

  getBodyContent(body: Params): Params {
    const result: Params = {};
    const keys = [
      'overview',
      'tabs',
      'carousel',
      'install_guide',
      'master_booklet',
      'banner_text',
    ];
    keys.forEach((key: string) => {
      if (body.hasOwnProperty(key) && body[key]) {
        result[key] = body[key];
      }
    });
    return result;
  }

  updateActivePageTab(index: number): void {
    this.activePageTab = index;
  }
}
