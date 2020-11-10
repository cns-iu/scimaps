import { Component, Input } from '@angular/core';
import { NewsItem } from '../news-item/news-item.model';


@Component({
  selector: 'sci-news-item-list',
  templateUrl: './news-item-list.component.html',
  styleUrls: ['./news-item-list.component.scss']
})
export class NewsItemListComponent {

  @Input() newsItems!: NewsItem[];

  dateOrder = 'asc';
  titleOrder = 'asc';
  publicationOrder = 'asc';

  sort(criteria: 'date' | 'publication' | 'title'): void {
    let order = 'asc';
    if (criteria === 'publication') {
      this.publicationOrder = this.publicationOrder === 'asc' ? 'desc' : 'asc';
      order = this.publicationOrder;
    } else if (criteria === 'date') {
      this.dateOrder = this.dateOrder === 'asc' ? 'desc' : 'asc';
      order = this.dateOrder;
    } else {
      this.titleOrder = this.titleOrder === 'asc' ? 'desc' : 'asc';
      order = this.titleOrder;
    }
    this.newsItems = [...this.newsItems].sort(this.compareValues(criteria, order));
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
