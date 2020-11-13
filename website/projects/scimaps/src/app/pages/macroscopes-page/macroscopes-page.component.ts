import { Component, HostBinding } from '@angular/core';
import { DiscoverItem } from '../../core/models/discover-item';

@Component({
  selector: 'sci-macroscopes-page',
  templateUrl: './macroscopes-page.component.html',
  styleUrls: ['./macroscopes-page.component.scss']
})
export class MacroscopesPageComponent {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-macroscopes-page';

  itemsToDisplay = 3;
  highlightBody = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci. Nulla vitae mauris nisi. Aenean orci ipsum, scelerisque et arcu quis, molestie efficitur dui. Curabitur enim lacus, vehicula at arcu id, sagittis posuere est. Maecenas laoreet est eget tristique interdum. Fusce consequat, nisl ac bibendum facilisis, tellus nulla blandit orci, quis dignissim est mi ac justo. Pellentesque ultrices blandit diam quis pretium. Suspendisse ut ante in enim consequat semper id consectetur arcu. Proin ultricies vestibulum nulla sit amet.';
  discoverItems: DiscoverItem[] = [
    {
      title: 'XV: macroscopes for Tracking the Flow of Resources (2019)',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci. Nulla vitae mauris nisi. Aenean orci ipsum, scelerisque et arcu quis, molestie efficitur dui. Curabitur enim lacus, vehicula at arcu id, sagittis posuere est. Maecenas laoreet est eget tristique interdum. Fusce consequat, nisl ac bibendum facilisis, tellus nulla blandit orci, quis dignissim est mi ac justo.',
      thumbnails: [
        {
          title: 'Refugee Flow',
          link: '',
          image: 'image1.png'
        },
        {
          title: 'Politoscope',
          link: '',
          image: 'image2.png'
        },
        {
          title: 'Income Disparity',
          link: '',
          image: 'image3.png'
        },
        {
          title: 'Making Sense of Skills',
          link: '',
          image: 'image4.png'
        }
      ],
      slug: 'macroscopes-2019',
      directory: 'macroscopes'
    },
    {
      title: 'XV: macroscopes for Tracking the Flow of Resources (2019)',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci. Nulla vitae mauris nisi. Aenean orci ipsum, scelerisque et arcu quis, molestie efficitur dui. Curabitur enim lacus, vehicula at arcu id, sagittis posuere est. Maecenas laoreet est eget tristique interdum. Fusce consequat, nisl ac bibendum facilisis, tellus nulla blandit orci, quis dignissim est mi ac justo.',
      thumbnails: [
        {
          title: 'Refugee Flow',
          link: '',
          image: 'image1.png'
        },
        {
          title: 'Politoscope',
          link: '',
          image: 'image2.png'
        },
        {
          title: 'Income Disparity',
          link: '',
          image: 'image3.png'
        },
        {
          title: 'Making Sense of Skills',
          link: '',
          image: 'image4.png'
        }
      ],
      slug: 'macroscopes-2019',
      directory: 'macroscopes'
    },
    {
      title: 'XV: macroscopes for Tracking the Flow of Resources (2019)',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci. Nulla vitae mauris nisi. Aenean orci ipsum, scelerisque et arcu quis, molestie efficitur dui. Curabitur enim lacus, vehicula at arcu id, sagittis posuere est. Maecenas laoreet est eget tristique interdum. Fusce consequat, nisl ac bibendum facilisis, tellus nulla blandit orci, quis dignissim est mi ac justo.',
      thumbnails: [
        {
          title: 'Refugee Flow',
          link: '',
          image: 'image1.png'
        },
        {
          title: 'Politoscope',
          link: '',
          image: 'image2.png'
        },
        {
          title: 'Income Disparity',
          link: '',
          image: 'image3.png'
        },
        {
          title: 'Making Sense of Skills',
          link: '',
          image: 'image4.png'
        }
      ],
      slug: 'macroscopes-2019',
      directory: 'macroscopes'
    },
    {
      title: 'XV: macroscopes for Tracking the Flow of Resources (2019)',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci. Nulla vitae mauris nisi. Aenean orci ipsum, scelerisque et arcu quis, molestie efficitur dui. Curabitur enim lacus, vehicula at arcu id, sagittis posuere est. Maecenas laoreet est eget tristique interdum. Fusce consequat, nisl ac bibendum facilisis, tellus nulla blandit orci, quis dignissim est mi ac justo.',
      thumbnails: [
        {
          title: 'Refugee Flow',
          link: '',
          image: 'image1.png'
        },
        {
          title: 'Politoscope',
          link: '',
          image: 'image2.png'
        },
        {
          title: 'Income Disparity',
          link: '',
          image: 'image3.png'
        },
        {
          title: 'Making Sense of Skills',
          link: '',
          image: 'image4.png'
        }
      ],
      slug: 'macroscopes-2019',
      directory: 'macroscopes'
    },
    {
      title: 'XV: macroscopes for Tracking the Flow of Resources (2019)',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci. Nulla vitae mauris nisi. Aenean orci ipsum, scelerisque et arcu quis, molestie efficitur dui. Curabitur enim lacus, vehicula at arcu id, sagittis posuere est. Maecenas laoreet est eget tristique interdum. Fusce consequat, nisl ac bibendum facilisis, tellus nulla blandit orci, quis dignissim est mi ac justo.',
      thumbnails: [
        {
          title: 'Refugee Flow',
          link: '',
          image: 'image1.png'
        },
        {
          title: 'Politoscope',
          link: '',
          image: 'image2.png'
        },
        {
          title: 'Income Disparity',
          link: '',
          image: 'image3.png'
        },
        {
          title: 'Making Sense of Skills',
          link: '',
          image: 'image4.png'
        }
      ],
      slug: 'macroscopes-2019',
      directory: 'macroscopes'
    }
  ];

  get displayItems(): DiscoverItem[] {
    return this.discoverItems.splice(0, this.itemsToDisplay);
  }

  get moreMacroscopes(): boolean {
    return this.itemsToDisplay >= this.discoverItems.length;
  }
}
