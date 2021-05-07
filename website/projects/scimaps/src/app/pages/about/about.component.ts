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
    // console.log(this.route);
    this.route.data.subscribe(data => {
      const about = data.about
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
  // placeholderProfilesShort: Profile[] = [
  //   {
  //     name: 'Name Surname',
  //     title: 'Job Title',
  //     affiliation: 'Affiliation',
  //     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
  //     link: 'www.google.com',
  //     slug: 'name-surname'
  //   },
  //   {
  //     name: 'Name Surname',
  //     title: 'Job Title',
  //     affiliation: 'Affiliation',
  //     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
  //     link: 'www.google.com',
  //     slug: 'name-surname'
  //   },
  //   {
  //     name: 'Name Surname',
  //     title: 'Job Title',
  //     affiliation: 'Affiliation',
  //     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
  //     link: 'www.google.com',
  //     slug: 'name-surname'
  //   }
  // ];
  // placeholderProfilesLong: Profile[] = [
  //   {
  //     name: 'Name Surname',
  //     title: 'Job Title',
  //     affiliation: 'Affiliation',
  //     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
  //     link: 'www.google.com',
  //     slug: 'name-surname'
  //   },
  //   {
  //     name: 'Name Surname',
  //     title: 'Job Title',
  //     affiliation: 'Affiliation',
  //     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
  //     link: 'www.google.com',
  //     slug: 'name-surname'
  //   },
  //   {
  //     name: 'Name Surname',
  //     title: 'Job Title',
  //     affiliation: 'Affiliation',
  //     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
  //     link: 'www.google.com',
  //     slug: 'name-surname'
  //   },
  //   {
  //     name: 'Name Surname',
  //     title: 'Job Title',
  //     affiliation: 'Affiliation',
  //     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
  //     link: 'www.google.com',
  //     slug: 'name-surname'
  //   },
  //   {
  //     name: 'Name Surname',
  //     title: 'Job Title',
  //     affiliation: 'Affiliation',
  //     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
  //     link: 'www.google.com',
  //     slug: 'name-surname'
  //   },
  //   {
  //     name: 'Name Surname',
  //     title: 'Job Title',
  //     affiliation: 'Affiliation',
  //     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
  //     link: 'www.google.com',
  //     slug: 'name-surname'
  //   },
  //   {
  //     name: 'Name Surname',
  //     title: 'Job Title',
  //     affiliation: 'Affiliation',
  //     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
  //     link: 'www.google.com',
  //     slug: 'name-surname'
  //   },
  //   {
  //     name: 'Name Surname',
  //     title: 'Job Title',
  //     affiliation: 'Affiliation',
  //     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
  //     link: 'www.google.com',
  //     slug: 'name-surname'
  //   },
  //   {
  //     name: 'Name Surname',
  //     title: 'Job Title',
  //     affiliation: 'Affiliation',
  //     body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
  //     link: 'www.google.com',
  //     slug: 'name-surname'
  //   }
  // ];
  
  placeholderDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam ligula felis, id blandit quam viverra auctor. Nullam quam dolor, mattis consequat tincidunt sed, condimentum id sapien. Pellentesque ut congue lectus. Sed leo velit, rutrum vitae sapien sed, faucibus tincidunt justo. Donec et vestibulum enim, a efficitur purus. Mauris quis lacinia nibh, eget suscipit felis. Suspendisse ut elementum metus, ac sagittis sem. ';
  pageTabs = ['Curators/Advisory Board', 'Ambassadors'];
  activePageTab = 0;
  directory = 'content/person'
  updateActivePageTab(index: number): void {
    this.activePageTab = index;
  }
}
