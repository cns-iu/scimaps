import { Component, HostBinding, OnInit } from '@angular/core';
import { Profile } from '../../core/models/profile';
import { ActivatedRoute } from '@angular/router';
import { NewsItem } from '../../shared/components/news-item/news-item.model';

@Component({
  selector: 'sci-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-about';

  overviewParagraph = '';
  overviewQuote = '';

  curatorProfiles: Profile[] = [];
  curatorsDescription = '';
  advisoryBoardProfiles: Profile[] = [];
  advisoryBoardDescription = '';
  ambassadorProfiles: Profile[] = [];
  ambassadorProfilesByGroup: {[key: string]: Profile[]} = {};
  ambassadorsDescription = '';
  pageTabs = ['Curatorial Team / Advisory Board', 'Exhibit Ambassadors'];
  activePageTab = 0;
  newsItems: NewsItem[] = [];

  partners = [{
    name: 'CNS',
    logo: 'assets/logos/logo-cns.svg',
    link: 'https://cns.iu.edu'
  }, {
    name: 'Luddy',
    logo: 'assets/logos/logo-luddy-school.svg',
    link: 'https://luddy.indiana.edu/index.html'
  }, {
    name: 'McDonnel',
    logo: 'assets/logos/logo-james-s-mcdonnell-foundation.svg',
    link: 'https://www.jsmf.org/'
  }, {
    name: 'reuters',
    logo: 'assets/logos/logo-thomson-reuters.svg',
    link: 'http://thomsonreuters.com/'
  }, {
    name: 'NSF',
    logo: 'assets/logos/logo-nsf.svg',
    link: 'https://www.nsf.gov/'
  }, {
    name: 'elsevier',
    logo: 'assets/logos/logo-elsevier.svg',
    link: 'https://www.elsevier.com/'
  }];

  annualReportYears: string[] = ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'];

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const {profiles, body, newsItems} = data;
      // Profiles
      if (profiles && Array.isArray(profiles)) {
        this.curatorProfiles = profiles.filter((profile: Profile) => {
          return profile.roles.includes('curator') || profile.roles.includes('co-curator');
        });
        this.advisoryBoardProfiles = profiles.filter((profile: Profile) => {
          return profile.roles.includes('advisory_board');
        });
        this.ambassadorProfiles = profiles.filter((profile: Profile) => {
          return profile.roles.includes('ambassador');
        });
        this.ambassadorProfilesByGroup = this.ambassadorProfiles.reduce((accumulator: {[key: string]: Profile[]}, profile: Profile) => {
          if (profile.location_name) {
            if (accumulator[profile.location_name]) {
              accumulator[profile.location_name].push(profile);
            } else {
              accumulator[profile.location_name] = [profile];
            }
          }
          return accumulator;
        }, {});
      }
      // Body
      if (body) {
        if (body.hasOwnProperty('curatorsDescription') && body.curatorsDescription) {
          this.curatorsDescription = body.curatorsDescription;
        }
        if (body.hasOwnProperty('advisoryBoardDescription') && body.advisoryBoardDescription) {
          this.advisoryBoardDescription = body.advisoryBoardDescription;
        }
        if (body.hasOwnProperty('ambassadorsDescription') && body.ambassadorsDescription) {
          this.ambassadorsDescription = body.ambassadorsDescription;
        }
        if (body.hasOwnProperty('overviewParagraph') && body.overviewParagraph) {
          this.overviewParagraph = body.overviewParagraph;
        }
        if (body.hasOwnProperty('overviewQuote') && body.overviewQuote) {
          this.overviewQuote = body.overviewQuote;
        }
      }
      // newsItem
      if (newsItems && Array.isArray(newsItems)) {
        this.newsItems = newsItems;
      }
     });
  }

  updateActivePageTab(index: number): void {
    this.activePageTab = index;
  }


  openLink(link: string): void {
    window.open(link, '_blank');
  }

  getReport(year: string): void {
    if (year) {
      window.open(`assets/annual-reports/${year}-ps-annual-report.pdf`, '_blank');
    }
  }
}
