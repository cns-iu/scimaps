import { Component, HostBinding } from '@angular/core';
import { Profile } from '../../core/models/profile';

@Component({
  selector: 'sci-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-about';

  placeholderProfilesShort: Profile[] = [
    {
      name: 'Name Surname',
      title: 'Job Title',
      affiliation: 'Affiliation',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
      link: 'www.google.com',
      slug: 'name-surname'
    },
    {
      name: 'Name Surname',
      title: 'Job Title',
      affiliation: 'Affiliation',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
      link: 'www.google.com',
      slug: 'name-surname'
    },
    {
      name: 'Name Surname',
      title: 'Job Title',
      affiliation: 'Affiliation',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
      link: 'www.google.com',
      slug: 'name-surname'
    }
  ];
  placeholderProfilesLong: Profile[] = [
    {
      name: 'Name Surname',
      title: 'Job Title',
      affiliation: 'Affiliation',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
      link: 'www.google.com',
      slug: 'name-surname'
    },
    {
      name: 'Name Surname',
      title: 'Job Title',
      affiliation: 'Affiliation',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
      link: 'www.google.com',
      slug: 'name-surname'
    },
    {
      name: 'Name Surname',
      title: 'Job Title',
      affiliation: 'Affiliation',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
      link: 'www.google.com',
      slug: 'name-surname'
    },
    {
      name: 'Name Surname',
      title: 'Job Title',
      affiliation: 'Affiliation',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
      link: 'www.google.com',
      slug: 'name-surname'
    },
    {
      name: 'Name Surname',
      title: 'Job Title',
      affiliation: 'Affiliation',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
      link: 'www.google.com',
      slug: 'name-surname'
    },
    {
      name: 'Name Surname',
      title: 'Job Title',
      affiliation: 'Affiliation',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
      link: 'www.google.com',
      slug: 'name-surname'
    },
    {
      name: 'Name Surname',
      title: 'Job Title',
      affiliation: 'Affiliation',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
      link: 'www.google.com',
      slug: 'name-surname'
    },
    {
      name: 'Name Surname',
      title: 'Job Title',
      affiliation: 'Affiliation',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
      link: 'www.google.com',
      slug: 'name-surname'
    },
    {
      name: 'Name Surname',
      title: 'Job Title',
      affiliation: 'Affiliation',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
      link: 'www.google.com',
      slug: 'name-surname'
    }
  ];
  placeholderDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam ligula felis, id blandit quam viverra auctor. Nullam quam dolor, mattis consequat tincidunt sed, condimentum id sapien. Pellentesque ut congue lectus. Sed leo velit, rutrum vitae sapien sed, faucibus tincidunt justo. Donec et vestibulum enim, a efficitur purus. Mauris quis lacinia nibh, eget suscipit felis. Suspendisse ut elementum metus, ac sagittis sem. ';
}
