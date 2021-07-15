import { Component, HostBinding, OnInit } from '@angular/core';
import { Profile } from '../../core/models/profile';
import { ActivatedRoute, Params } from '@angular/router';
import { NewsItem } from '../../shared/components/news-item/news-item.model';
import { MatTableDataSource } from '@angular/material/table';

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
  annualReports: { year: string; pdfLink: string }[] = [];

  partners: { name: string; logo: string; link: string }[] = [
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

  sortHeaders = [
    {
      label: 'Source',
      key: 'publication',
    },
  ];

  dataSource: MatTableDataSource<NewsItem> = new MatTableDataSource();
  searchKey = '';
  year = '';

  get yearList(): string[] {
    const years = this.dataSource.data.map((item: NewsItem) => {
      const fullDate = new Date(item.date);
      return fullDate.getFullYear().toString();
    });
    return [...new Set(years)];
  }

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
        overviewQuote: this.overviewQuote,
        annualReports: this.annualReports,
      } = this.getStaticContent(body));
      // NewsItems
      if (newsItems && Array.isArray(newsItems)) {
        this.newsItems = newsItems;
        this.dataSource.data = newsItems;
        this.dataSource.filterPredicate = this.filterData;
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

  getStaticContent(body: Params): Params {
    const keys = [
      'curatorsDescription',
      'advisoryBoardDescription',
      'ambassadorsDescription',
      'overviewParagraph',
      'overviewQuote',
      'annualReports',
    ];
    const result: Params = {};
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

  getReport(report: string): void {
    if (report) {
      window.open(report, '_blank');
    }
  }

  // Predicate for filtering data.
  filterData(item: NewsItem, filter: string): boolean {
    const parsedFilter = JSON.parse(filter);
    let result = true;
    if (parsedFilter.year && parsedFilter.year !== 'all') {
      const year = new Date(item.date).getFullYear().toString();
      result = result && year === parsedFilter.year;
    }

    if (parsedFilter.searchKey) {
      result =
        result &&
        (item.title?.toLowerCase().includes(parsedFilter.searchKey) ||
          item.publication?.toLowerCase().includes(parsedFilter.searchKey));
    }
    return result;
  }
  onSearchChange(searchKey: string): void {
    this.searchKey = searchKey;
    this.applyFilter();
  }
  onSelectChange(year: string): void {
    this.year = year;
    this.applyFilter();
  }
  applyFilter(): void {
    const filter = { year: this.year, searchKey: this.searchKey };
    const filterString = JSON.stringify(filter);
    this.dataSource.filter = filterString;
  }
}
