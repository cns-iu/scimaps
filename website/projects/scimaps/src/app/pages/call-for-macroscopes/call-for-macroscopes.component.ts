import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { drawerInOut } from '../../constants/drawer.animations';

@Component({
  selector: 'sci-call-for-macroscopes',
  templateUrl: './call-for-macroscopes.component.html',
  styleUrls: ['./call-for-macroscopes.component.scss'],
  animations: [
    drawerInOut
  ]
})
export class CallForMacroscopesComponent implements OnInit {
  @HostBinding('class') readonly clsName = 'sci-call-for-macrosopes';
  // tabHeaders = ['General Information', 'How to Submit', 'Review & Final Submission Process'];
  tabHeaders: string[] = [];
  tabContents: string[] = [];
  lastIterationThumbnails: {image: string, title: string}[] = [];
  activePageTab = 0;
  showDrawer = false;
  lastIteration = 16;
  importantDates: Array<[string, string]> = [
    ['Sunmissions due', 'March 15, 2021'],
    ['Notification to mapmakers', 'April 15, 2021'],
    ['Submit final entries', 'May 30, 2021'],
    ['Iteration ready for display', 'August 31, 2021']
  ];

  submitURL = '';
  pdfLink = 'assets/call-for-macroscopes/call-for-macroscopes.pdf';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: Params) => {
      const { body } = data;
      // Body
      if (body) {
        const { lastIteration, submitURL, tabs } = body;
        // Tabs
        if (tabs && Array.isArray(tabs)) {
          tabs.forEach((tab: {header: string, content: string}) => {
            this.tabHeaders.push(tab.header);
            this.tabContents.push(tab.content);
          });
        }
        // other keys
        this.lastIteration = lastIteration || 16;
        this.submitURL = submitURL;
      }
      // Last Macroscope Iteraction
      const { macroscopes } = data;
      if (macroscopes && Array.isArray(macroscopes) && macroscopes.length > 0) {
        const lastmacroscope = macroscopes.find((macroscope: Params) => {
          return macroscope.slug.includes(this.lastIteration);
        });
        if (lastmacroscope) {
          this.lastIterationThumbnails = lastmacroscope.thumbnails;
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
