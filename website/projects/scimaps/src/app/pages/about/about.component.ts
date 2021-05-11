import { Component, HostBinding, OnInit } from '@angular/core';
import { Profile } from '../../core/models/profile';
import { Router, ActivatedRoute } from '@angular/router';

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
      // Temporary code. Later will be replaced with actual filtering logic.
      this.curatorProfiles = profiles.slice(0, 3);
      this.curatorsDescription = body.curatorsDescription;
      this.advisoryBoardProfiles = profiles.slice(3, 12);
      this.advisoryBoardDescription = body.advisoryBoardDescription;
      this.ambassadorProfiles = profiles.slice(12, 21);
      this.ambassadorsDescription = body.ambassadorsDescription;
    });
  }

  updateActivePageTab(index: number): void {
    this.activePageTab = index;
  }
}
