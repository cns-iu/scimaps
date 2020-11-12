import { Component } from '@angular/core';

import { NewsItem } from './shared/components/news-item/news-item.model';


@Component({
  selector: 'sci-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scimaps';

  newsItems: NewsItem[] = [
    {
      title: 'The Places & Spaces: Mapping Science comes to Virginia Tech at the University Libraries',
      date: new Date(2020, 2, 2),
      publication: 'Library News',
      institution: 'Virginia Tech',
      thumbnail: '../../assets/images/rose.jpg',
      pdfLink: 'link'
    },
    {
      title: 'International exhibit unites students, faculty and staff in celebrating mapping technology',
      date: new Date(2020, 2, 1),
      publication: 'Research News',
      institution: 'Vanderbilt',
      thumbnail: '../../assets/images/rose.jpg',
      pdfLink: 'link'
    },
    {
      title: 'Exhibit travels to the Centers for Disease Control and Prevention Museum in Atlanta',
      date: new Date(2020, 2, 2),
      publication: 'SolC News',
      institution: null,
      thumbnail: '../../assets/images/rose.jpg',
      pdfLink: 'link'
    },
    {
      title: 'Article from 2019',
      date: new Date(2019, 3, 1),
      publication: 'Science News',
      institution: 'Washington University',
      thumbnail: '../../assets/images/rose.jpg',
      pdfLink: 'link'
    },
  ];
}
