import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { drawerInOut } from '../../constants/drawer.animations';

@Component({
  selector: 'sci-call-for-macroscopes',
  templateUrl: './call-for-macroscopes.component.html',
  styleUrls: ['./call-for-macroscopes.component.scss'],
  animations: [drawerInOut],
})
export class CallForMacroscopesComponent implements OnInit {
  @HostBinding('class') readonly clsName = 'sci-call-for-macrosopes';
  tabHeaders: string[] = [];
  tabContents: string[] = [];
  lastIterationThumbnails: { image: string; title: string }[] = [];
  activePageTab = 0;
  showDrawer = false;
  lastIteration?: number;
  importantDates: Array<[string, Date]> = [];

  submitURL = '';
  pdfLink = '';
  allowSubmission = true;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Params) => {
      const { body } = data;
      // Body
      if (body) {
        const {
          importantDates,
          pdfLink,
          lastIteration,
          submitURL,
          tabs,
          allowSubmission,
        } = body;
        // Tabs
        if (tabs && Array.isArray(tabs)) {
          tabs.forEach((tab: { header: string; content: string }) => {
            this.tabHeaders.push(tab.header);
            this.tabContents.push(tab.content);
          });
        }
        // other keys
        if (this.lastIteration) {
          this.lastIteration = lastIteration;
        }
        this.submitURL = submitURL;
        this.pdfLink = pdfLink;
        this.allowSubmission = allowSubmission;
        this.importantDates = importantDates.map(
          (item: { label: string; date: Date }) => {
            return [item.label, item.date];
          }
        );
      }
      // Last Macroscope Iteraction
      const { macroscopes } = data;
      if (macroscopes && Array.isArray(macroscopes) && macroscopes.length > 0) {
        const lastmacroscope = macroscopes.find((macroscope: Params) => {
          return macroscope.slug.includes(this.lastIteration);
        });
        if (lastmacroscope) {
          this.lastIterationThumbnails = lastmacroscope.thumbnails;
        } else {
          this.lastIterationThumbnails = [
            {
              image: 'assets/content/site/home/image008.png',
              title: 'placeholder',
            },
          ];
        }
      }
    });
  }

  updateActivePageTab(index: number): void {
    this.activePageTab = index;
  }

  submitMacroscope(): void {
    if (this.submitURL) {
      window.open(this.submitURL, '_blank');
    }
  }
}
