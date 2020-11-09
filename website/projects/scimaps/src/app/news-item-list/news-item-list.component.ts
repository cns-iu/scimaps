import { Component, Input } from '@angular/core';
import { NewsItem } from '../core/models/news-item';


@Component({
  selector: 'sci-news-item-list',
  templateUrl: './news-item-list.component.html',
  styleUrls: ['./news-item-list.component.scss']
})
export class NewsItemListComponent {

  @Input() newsItems: NewsItem[] = [
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

  dateOrder = 'asc';
  titleOrder = 'desc';
  publicationOrder = 'desc';
  sortCriteria: 'date' | 'publication' | 'title' = 'date';

  sortPub(): void {
    this.publicationOrder = this.publicationOrder === 'asc' ? 'desc' : 'asc';
    this.sortCriteria = 'publication';
    this.newsItems = [...this.newsItems].sort(this.compareValues(this.sortCriteria, this.publicationOrder));
  }

  sortDate(): void {
    this.dateOrder = this.dateOrder === 'asc' ? 'desc' : 'asc';
    this.sortCriteria = 'date';
    this.newsItems = [...this.newsItems].sort(this.compareValues(this.sortCriteria, this.dateOrder));
  }

  sortTitle(): void {
    this.titleOrder = this.titleOrder === 'asc' ? 'desc' : 'asc';
    this.sortCriteria = 'title';
    this.newsItems = [...this.newsItems].sort(this.compareValues(this.sortCriteria, this.titleOrder));
  }

  compareValues(key: 'date' | 'publication' | 'title', order = 'asc'): (a: NewsItem, b: NewsItem) => number {
    return (a, b) => {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }
      const comparison = a[key].localeCompare(b[key]);

      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }
}
