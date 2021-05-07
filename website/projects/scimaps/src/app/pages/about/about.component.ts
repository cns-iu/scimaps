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

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const about = data.about
      // Temporary code. Later will be replaced with actual filtering logic.
      this.curatorProfiles = about.slice(0, 3)
      this.advisoryBoardProfiles = about.slice(3, 12)
      this.ambassadorProfiles = about.slice(12, 21)
    })
  }

  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-about';

  curatorProfiles = [];
  advisoryBoardProfiles = [];
  ambassadorProfiles = []
  
  placeholderDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam ligula felis, id blandit quam viverra auctor. Nullam quam dolor, mattis consequat tincidunt sed, condimentum id sapien. Pellentesque ut congue lectus. Sed leo velit, rutrum vitae sapien sed, faucibus tincidunt justo. Donec et vestibulum enim, a efficitur purus. Mauris quis lacinia nibh, eget suscipit felis. Suspendisse ut elementum metus, ac sagittis sem. ';
  pageTabs = ['Curators/Advisory Board', 'Ambassadors'];
  activePageTab = 0;
  directory = 'content/person'
  updateActivePageTab(index: number): void {
    this.activePageTab = index;
  }
}
