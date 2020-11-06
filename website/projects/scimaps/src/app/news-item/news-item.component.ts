import { Component, Input } from '@angular/core';
import { NewsItem } from '../core/models/news-item';

@Component({
  selector: 'sci-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent {

   @Input() item: NewsItem = {
     title: 'The Places & Spaces: Mapping Science comes to Virginia Tech at the University Libraries',
     date: 'MAR 2, 2020',
     source: 'Library News',
     institution: 'Virginia Tech',
     thumbnail: '../../assets/images/rose.jpg',
     pdfLink: 'link'
   };
}
