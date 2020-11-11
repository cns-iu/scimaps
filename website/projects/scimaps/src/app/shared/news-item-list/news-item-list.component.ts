import { Component, Input } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { NewsItem } from '../news-item/news-item.model';


@Component({
  selector: 'sci-news-item-list',
  templateUrl: './news-item-list.component.html',
  styleUrls: ['./news-item-list.component.scss']
})
export class NewsItemListComponent {

  @Input() newsItems!: NewsItem[];

  @Input() displayedNewsItems: NewsItem[] = this.newsItems;

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
    this.displayedNewsItems = [...this.displayedNewsItems].sort(this.compareValues(criteria, order));
  }

  compareValues(key: 'date' | 'publication' | 'title', order = 'asc'): (a: NewsItem, b: NewsItem) => number {
    return (a, b) => {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }

      let comparison;
      if (key === 'date') {
        comparison = a[key].slice(-4).localeCompare(b[key].slice(-4));
      } else {
        comparison = a[key].localeCompare(b[key]);
      }

      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }

  get yearList(): string[] {
    return ['All'].concat([...new Set(this.newsItems.map(item => item.date.slice(-4)))]);
  }

  onYearChange(event: MatSelectChange): void {
    if (event.value === 'All') {
      this.displayedNewsItems = [...this.newsItems];
    } else {
      this.displayedNewsItems = [...this.newsItems].filter((item) => item.date.slice(-4) === event.value);
    }
  }
}
