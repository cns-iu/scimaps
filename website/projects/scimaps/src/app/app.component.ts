import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  trigger,
  query,
  style,
  animate,
  transition,
  group,
  animateChild
} from '@angular/animations';

import { ImageCardItem } from './core/models/image-card-item';
import { NewsItem } from './shared/components/news-item/news-item.model';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('Maps => Map', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '-100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);

@Component({
  selector: 'sci-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  sidenavOpen = false;

  newsItems: NewsItem[] = [
    {
      title: 'The Places & Spaces: Mapping Science comes to Virginia Tech at the University Libraries',
      date: new Date(2020, 2, 2),
      publication: 'Library News',
      institution: 'Virginia Tech',
      thumbnail: 'assets/images/rose.jpg',
      pdfLink: 'link'
    },
    {
      title: 'International exhibit unites students, faculty and staff in celebrating mapping technology',
      date: new Date(2020, 2, 1),
      publication: 'Research News',
      institution: 'Vanderbilt',
      thumbnail: 'assets/images/rose.jpg',
      pdfLink: 'link'
    },
    {
      title: 'Exhibit travels to the Centers for Disease Control and Prevention Museum in Atlanta',
      date: new Date(2020, 2, 2),
      publication: 'SolC News',
      institution: null,
      thumbnail: 'assets/images/rose.jpg',
      pdfLink: 'link'
    },
    {
      title: 'Article from 2019',
      date: new Date(2019, 3, 1),
      publication: 'Science News',
      institution: 'Washington University',
      thumbnail: 'assets/images/rose.jpg',
      pdfLink: 'link'
    },
    {
      title: 'The Places & Spaces: Mapping Science comes to Virginia Tech at the University Libraries',
      date: new Date(2020, 2, 2),
      publication: 'Library News',
      institution: 'Virginia Tech',
      thumbnail: 'assets/images/rose.jpg',
      pdfLink: 'link'
    },
    {
      title: 'International exhibit unites students, faculty and staff in celebrating mapping technology',
      date: new Date(2020, 2, 1),
      publication: 'Research News',
      institution: 'Vanderbilt',
      thumbnail: 'assets/images/rose.jpg',
      pdfLink: 'link'
    },
    {
      title: 'Exhibit travels to the Centers for Disease Control and Prevention Museum in Atlanta',
      date: new Date(2020, 2, 2),
      publication: 'SolC News',
      institution: null,
      thumbnail: 'assets/images/rose.jpg',
      pdfLink: 'link'
    },
    {
      title: 'Article from 2019',
      date: new Date(2019, 3, 1),
      publication: 'Science News',
      institution: 'Washington University',
      thumbnail: 'assets/images/rose.jpg',
      pdfLink: 'link'
    }
  ];
  learningItems: ImageCardItem[] = [
    {
      title: 'Humanexus',
      body: 'A short film that visualizes human communication from the Stone Age to today...and beyond.',
      slug: 'humanexus'
    },
    {
      title: 'WorldProcessor Globes',
      body: 'Explore mapped social, scientific, political and economic data on three globes as navigation guides in a "globalized" world.',
      slug: 'worldprocess-globes'
    },
    {
      title: 'Illuminated Diagram Display',
      body: 'Explore mapped social, scientific, political and economic data on three globes as navigation guides in a "globalized" world.',
      slug: 'illluminated-diagram-display'
    },
    {
      title: 'Scultpures of Science',
      body: 'The history of science realized in tangible form.',
      slug: 'sculptures-of-science'
    },
    {
      title: 'Inside the Museum',
      body: 'An imaginative look at the inside of the Metropolitan Museum of Art\'s holdings and spaces.',
      slug: 'inside-the-museum'
    },
    {
      title: 'The Fundamental Interconnectedness of All Things [dynamic format]',
      body: '',
      slug: 'interconnectedness-of-all-things'
    },
    {
      title: 'Gapminder Card Game',
      body: 'Country cards are arranged to reflect the gaps in the world today, then compared to the Gapminder World Map.',
      slug: 'gapminder-card-game'
    },
    {
      title: 'Science Maps for Kids',
      body: 'The hands-on science maps for kids invite children to see, explore, and understand science from above.',
      slug: 'science-maps-for-kids'
    },
    {
      title: 'Adventures in Knowledge Land Comic Book',
      body: 'Explores the Atlas of Science book using comics as a forum.',
      slug: 'knowledge-land-comic'
    },
    {
      title: 'My Science Story Coloring Book',
      body: 'Kids learn science by coloring.',
      slug: 'science-coloring-book'
    }
  ];

  readonly slides = [
    'assets/images/benches.jpg',
    'assets/images/bridge.jpg',
    'assets/images/flower.jpg',
    'assets/images/garden.jpg',
  ];

  newsItem: NewsItem = {
    title: 'The Places & Spaces: Mapping Science comes to Virginia Tech at the University Libraries',
    date: new Date(2020, 2, 2),
    publication: 'Library News',
    institution: 'Virginia Tech',
    thumbnail: 'assets/images/rose.jpg',
    pdfLink: 'link'
  };

  footerParameters = {
    phoneNumber: '812-855-9930',
    acknowledgement: ''
  };

  prepareRoute(outlet: RouterOutlet): string {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
