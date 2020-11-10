import { Component } from '@angular/core';
import { NewsItem } from './shared/news-item/news-item.model';


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
      date: 'MAR 2, 2020',
      publication: 'Library News',
      institution: 'Virginia Tech',
      thumbnail: '../../assets/images/rose.jpg',
      pdfLink: 'link'
    },
    {
      title: 'International exhibit unites students, faculty and staff in celebrating mapping technology',
      date: 'MAR 1, 2020',
      publication: 'Research News',
      institution: 'Vanderbilt',
      thumbnail: '../../assets/images/rose.jpg',
      pdfLink: 'link'
    },
  ];
}
