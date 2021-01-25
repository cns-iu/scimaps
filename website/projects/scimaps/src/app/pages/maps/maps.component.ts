import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DiscoverItem, ThumbnailLink } from '../../core/models/discover-item';


@Component({
  selector: 'sci-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-maps';

  /** Gives details-open class when showDrawer is true */
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
  highlightCarouselItems: ThumbnailLink[] = [
    {
      image: 'assets/images/benches.jpg',
      title: 'Map 1 Description.',
      link: 'www.google.com'
    },
    {
      image: 'assets/images/bridge.jpg',
      title: 'Map 2 Description.',
      link: 'www.google.com'
    },
    {
      image: 'assets/images/flower.jpg',
      title: 'Map 3 Description.',
      link: 'www.google.com'
    },
    {
      image: 'assets/images/garden.jpg',
      title: 'Map 4 Description.',
      link: 'www.google.com'
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.highlightBody = data.body.body;
      this.discoverItems = data.maps;
      this.highlightCarouselItems = this.discoverItems
        .reduce((acc, item) => {
          const thumbs = item.thumbnails;
          const randomThumbnailIndex = Math.round(Math.random() * (thumbs.length - 1));
          return acc.concat(thumbs[randomThumbnailIndex]);
        }, [] as ThumbnailLink[]);

      this.updateDisplayItems();
    });
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

  /**
   * Opens the details drawer
   */
  openDetails(): void {
    this.showDrawer = true;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = () => {
      window.scrollTo(scrollLeft, scrollTop);
    };
    const drawer = document.getElementsByClassName('details-drawer')[0] as HTMLElement;
    if (window.innerWidth > 640) {
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = '1rem';
      drawer.style.width = '100%';
    }
  }

  /**
   * Closes the details drawer
   */
  closeDetails(): void {
    this.showDrawer = false;
    window.onscroll = () => {};
    const drawer = document.getElementsByClassName('details-drawer')[0] as HTMLElement;
    if (window.innerWidth > 640) {
      document.body.style.overflow = 'unset';
      document.body.style.marginRight = '0';
      drawer.style.width = 'calc(100% + 1rem)';
    }
  }
}
