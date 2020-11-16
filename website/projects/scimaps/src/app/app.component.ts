import { Component } from '@angular/core';

import { NewsItem } from './shared/components/news-item/news-item.model';


@Component({
  selector: 'sci-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scimaps';

  readonly slides = [
    'assets/images/benches.jpg',
    'assets/images/bridge.jpg',
    'assets/images/flower.jpg',
    'assets/images/garden.jpg',
  ];

  newsItem: NewsItem = {
    title: 'The Places & Spaces: Mapping Science comes to Virginia Tech at the University Libraries',
    date: new Date(2020, 2, 2),
    source: 'Library News',
    institution: 'Virginia Tech',
    thumbnail: '../../assets/images/rose.jpg',
    pdfLink: 'link'
  };
}
