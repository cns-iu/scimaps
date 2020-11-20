import { Component, HostBinding, OnInit } from '@angular/core';
import { DiscoverItem } from '../../shared/components/discover-listing/discover-item';

@Component({
  selector: 'sci-maps-page',
  templateUrl: './maps-page.component.html',
  styleUrls: ['./maps-page.component.scss']
})
export class MapsPageComponent implements OnInit {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-maps-page';
  @HostBinding('class.details-open') showDrawer = false;

  showModal = false;
  itemsToDisplay = 3;
  highlightBody = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci. Nulla vitae mauris nisi. Aenean orci ipsum, scelerisque et arcu quis, molestie efficitur dui. Curabitur enim lacus, vehicula at arcu id, sagittis posuere est. Maecenas laoreet est eget tristique interdum. Fusce consequat, nisl ac bibendum facilisis, tellus nulla blandit orci, quis dignissim est mi ac justo. Pellentesque ultrices blandit diam quis pretium. Suspendisse ut ante in enim consequat semper id consectetur arcu. Proin ultricies vestibulum nulla sit amet.';
  discoverItems: DiscoverItem[] = [
    {
      title: 'X. The Future of Science Mapping',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci. Nulla vitae mauris nisi. Aenean orci ipsum, scelerisque et arcu quis, molestie efficitur dui. Curabitur enim lacus, vehicula at arcu id, sagittis posuere est. Maecenas laoreet est eget tristique interdum. Fusce consequat, nisl ac bibendum facilisis, tellus nulla blandit orci, quis dignissim est mi ac justo.',
      thumbnails: [
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        }
      ],
      slug: 'maps-2019',
      directory: 'maps'
    },
    {
      title: 'VIII. Science Maps Showing Trends & Dynamics (2013)',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci. Nulla vitae mauris nisi. Aenean orci ipsum, scelerisque et arcu quis, molestie efficitur dui. Curabitur enim lacus, vehicula at arcu id, sagittis posuere est. Maecenas laoreet est eget tristique interdum. Fusce consequat, nisl ac bibendum facilisis, tellus nulla blandit orci, quis dignissim est mi ac justo.',
      thumbnails: [
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        }
      ],
      slug: 'maps-2019',
      directory: 'maps'
    },
    {
      title: 'VIII. Science Maps for Kids (2012)',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci. Nulla vitae mauris nisi. Aenean orci ipsum, scelerisque et arcu quis, molestie efficitur dui. Curabitur enim lacus, vehicula at arcu id, sagittis posuere est. Maecenas laoreet est eget tristique interdum. Fusce consequat, nisl ac bibendum facilisis, tellus nulla blandit orci, quis dignissim est mi ac justo.',
      thumbnails: [
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        }
      ],
      slug: 'maps-2019',
      directory: 'maps'
    },
    {
      title: 'VII.',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci. Nulla vitae mauris nisi. Aenean orci ipsum, scelerisque et arcu quis, molestie efficitur dui. Curabitur enim lacus, vehicula at arcu id, sagittis posuere est. Maecenas laoreet est eget tristique interdum. Fusce consequat, nisl ac bibendum facilisis, tellus nulla blandit orci, quis dignissim est mi ac justo.',
      thumbnails: [
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        }
      ],
      slug: 'maps-2019',
      directory: 'maps'
    },
    {
      title: 'VI.',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci. Nulla vitae mauris nisi. Aenean orci ipsum, scelerisque et arcu quis, molestie efficitur dui. Curabitur enim lacus, vehicula at arcu id, sagittis posuere est. Maecenas laoreet est eget tristique interdum. Fusce consequat, nisl ac bibendum facilisis, tellus nulla blandit orci, quis dignissim est mi ac justo.',
      thumbnails: [
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        },
        {
          title: '',
          link: 'www.google.com',
          image: 'rose.jpg'
        }
      ],
      slug: 'maps-2019',
      directory: 'maps'
    }
  ];
  displayItems: DiscoverItem[] = [];

  readonly slides = [
    'assets/images/benches.jpg',
    'assets/images/bridge.jpg',
    'assets/images/flower.jpg',
    'assets/images/garden.jpg',
  ];

  ngOnInit(): void {
    this.updateDisplayItems();
  }

  updateDisplayItems(): void {
    const items: DiscoverItem[] = [...this.discoverItems];
    this.displayItems = items.splice(0, this.itemsToDisplay);
  }

  moreMaps(): boolean {
    return this.itemsToDisplay < this.discoverItems.length;
  }

  showMoreMaps(): void {
    this.itemsToDisplay = this.itemsToDisplay + 3;
    this.updateDisplayItems();
  }

  openDetails(): void {
    this.showDrawer = true;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = () => {
      window.scrollTo(scrollLeft, scrollTop);
    };
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = '1rem';
    const drawer = document.getElementsByClassName('details-drawer')[0] as HTMLElement;
    drawer.style.width = '100%';
  }

  closeDetails(): void {
    this.showDrawer = false;
    window.onscroll = () => {};
    document.body.style.overflow = 'unset';
    document.body.style.marginRight = '0';
    const drawer = document.getElementsByClassName('details-drawer')[0] as HTMLElement;
    drawer.style.width = 'calc(100% + 1rem)';
  }
}
