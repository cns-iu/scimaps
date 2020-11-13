import { Component, Input, HostBinding, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

import { NewsItem } from '../news-item/news-item.model';


@Component({
  selector: 'sci-news-item-list',
  templateUrl: './news-item-list.component.html',
  styleUrls: ['./news-item-list.component.scss']
})
export class NewsItemListComponent implements OnInit {

  @HostBinding('class') readonly clsName = 'sci-news-item-list';

  @Input() newsItems!: NewsItem[];

  @Input() displayedNewsItems: NewsItem[] = this.newsItems;

  dateOrder = 'asc';
  titleOrder = 'asc';
  publicationOrder = 'asc';

  showAllItems = false;

  selectedYear = 'All';

  ngOnInit(): void {
    this.sort('date');
  }

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
        comparison = a[key] > b[key] ? 1 : -1;
      } else {
        comparison = a[key].localeCompare(b[key]);
      }

      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }

  get yearList(): string[] {
    const years = this.newsItems.map(item => item.date.getFullYear().toString());
    return ['All'].concat([...new Set(years)]);
  }

  onYearChange(event: MatSelectChange): void {
    if (event.value === 'All') {
      this.displayedNewsItems = [...this.newsItems];
    } else {
      this.displayedNewsItems = [...this.newsItems].filter((item) => item.date.getFullYear().toString() === event.value);
    }
  }

  get showButtonText(): string {
    return (this.showAllItems) ? 'Show Less' : 'Show More';
  }

  needShowMoreButton(): boolean {
    return (this.displayedNewsItems.length < 5) ? false : true;
  }
}
