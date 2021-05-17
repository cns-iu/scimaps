import { Component, HostBinding, OnInit } from '@angular/core';
import { Profile } from '../../core/models/profile';
import { ActivatedRoute } from '@angular/router';

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
  pageTabs = ['Curators/Advisory Board', 'Ambassadors'];
  activePageTab = 0;

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const {profiles, body} = data;
      if (profiles && Array.isArray(profiles)) {
        this.curatorProfiles = profiles.filter((profile: Profile) => {
          return profile.roles.includes('maker');
        });
        this.advisoryBoardProfiles = profiles.filter((profile: Profile) => {
          return profile.roles.includes('advisory_board');
        });
        this.ambassadorProfiles = profiles.filter((profile: Profile) => {
          return profile.roles.includes('ambassador');
        });
      }
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
     });
  }

  updateActivePageTab(index: number): void {
    this.activePageTab = index;
  }
}
