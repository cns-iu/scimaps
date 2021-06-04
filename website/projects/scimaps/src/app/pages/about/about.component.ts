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

  curatorProfiles: Profile[] = [];
  curatorsDescription = '';
  advisoryBoardProfiles: Profile[] = [];
  advisoryBoardDescription = '';
  ambassadorProfiles: Profile[] = [];
  ambassadorsDescription = '';
  pageTabs = ['Curatorial Team / Advisory Board', 'Exhibit Ambassadors'];
  activePageTab = 0;
  newsItems: NewsItem[] = [];

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const {profiles, body, newsItems} = data;
      // Profiles
      if (profiles && Array.isArray(profiles)) {
        this.curatorProfiles = profiles.filter((profile: Profile) => {
          return profile.roles.includes('curator');
        });
        this.advisoryBoardProfiles = profiles.filter((profile: Profile) => {
          return profile.roles.includes('advisory_board');
        });
        this.ambassadorProfiles = profiles.filter((profile: Profile) => {
          return profile.roles.includes('ambassador');
        });
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
}
