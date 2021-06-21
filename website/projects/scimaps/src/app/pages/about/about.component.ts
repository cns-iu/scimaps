import { Component, HostBinding, OnInit } from '@angular/core';
import { Profile } from '../../core/models/profile';
import { ActivatedRoute } from '@angular/router';
import { NewsItem } from '../../shared/components/news-item/news-item.model';

@Component({
  selector: 'sci-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-about';

  overviewParagraph = '';
  overviewQuote = '';

  curatorProfiles: Profile[] = [];
  curatorsDescription = '';
  advisoryBoardProfiles: Profile[] = [];
  advisoryBoardDescription = '';
  ambassadorProfiles: Profile[] = [];
  ambassadorsDescription = '';
  pageTabs = ['Curatorial Team / Advisory Board', 'Exhibit Ambassadors'];
  activePageTab = 0;
  newsItems: NewsItem[] = [];

  partners = [
    {
      name: 'CNS',
      logo: 'assets/logos/logo-cns.svg',
      link: 'https://cns.iu.edu',
    },
    {
      name: 'Luddy',
      logo: 'assets/logos/logo-luddy-school.svg',
      link: 'https://luddy.indiana.edu/index.html',
    },
    {
      name: 'McDonnel',
      logo: 'assets/logos/logo-james-s-mcdonnell-foundation.svg',
      link: 'https://www.jsmf.org/',
    },
    {
      name: 'reuters',
      logo: 'assets/logos/logo-thomson-reuters.svg',
      link: 'https://thomsonreuters.com/',
    },
    {
      name: 'NSF',
      logo: 'assets/logos/logo-nsf.svg',
      link: 'https://www.nsf.gov/',
    },
    {
      name: 'elsevier',
      logo: 'assets/logos/logo-elsevier.svg',
      link: 'https://www.elsevier.com/',
    },
  ];

  annualReportYears: string[] = [
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
  ];

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      const { profiles, body, newsItems } = data;
      // Profiles
      ({
        curatorProfiles: this.curatorProfiles,
        advisoryBoardProfiles: this.advisoryBoardProfiles,
        ambassadorProfiles: this.ambassadorProfiles,
      } = this.groupProfiles(profiles));
      // Body
      ({
        curatorsDescription: this.curatorsDescription,
        advisoryBoardDescription: this.advisoryBoardDescription,
        ambassadorsDescription: this.ambassadorsDescription,
        overviewParagraph: this.overviewParagraph,
        overviewQuote: this.overviewQuote
      } = this.getStaticContent(body));
      // newsItem
      if (newsItems && Array.isArray(newsItems)) {
        this.newsItems = newsItems;
      }
    });
  }

  groupProfiles(profiles: Profile[]): { [key: string]: Profile[] } {
    let curatorProfiles: Profile[] = [];
    let advisoryBoardProfiles: Profile[] = [];
    let ambassadorProfiles: Profile[] = [];
    if (profiles && Array.isArray(profiles)) {
      curatorProfiles = profiles.filter((profile: Profile) => {
        return (
          profile.roles.includes('curator') ||
          profile.roles.includes('co-curator')
        );
      });
      advisoryBoardProfiles = profiles.filter((profile: Profile) => {
        return profile.roles.includes('advisory_board');
      });
      ambassadorProfiles = profiles.filter((profile: Profile) => {
        return profile.roles.includes('ambassador');
      });
    }
    return { curatorProfiles, advisoryBoardProfiles, ambassadorProfiles };
  }

  getStaticContent(body: { [key: string]: string }): {[key: string]: string} {
    const keys = [
      'curatorsDescription',
      'advisoryBoardDescription',
      'ambassadorsDescription',
      'overviewParagraph',
      'overviewQuote',
    ];
    const result: { [key: string]: string } = {};
    keys.forEach((key: string) => {
      if (body.hasOwnProperty(key) && body[key]) {
        result[key] = body[key];
      } else {
        result[key] = '';
      }
    });
    return result;
  }

  updateActivePageTab(index: number): void {
    this.activePageTab = index;
  }

  openLink(link: string): void {
    window.open(link, '_blank');
  }

  getReport(year: string): void {
    if (year) {
      window.open(
        `assets/annual-reports/${year}-ps-annual-report.pdf`,
        '_blank'
      );
    }
  }
}
