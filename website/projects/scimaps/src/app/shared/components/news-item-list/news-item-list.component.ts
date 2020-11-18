import { Component, HostBinding, Input, OnInit } from '@angular/core';

import { NewsItem } from '../news-item/news-item.model';


/**
 * Component for displaying news items
 */
@Component({
  selector: 'sci-news-item-list',
  templateUrl: './news-item-list.component.html',
  styleUrls: ['./news-item-list.component.scss']
})
export class NewsItemListComponent implements OnInit {
  /**
   * Component class name
   */
  @HostBinding('class') readonly clsName = 'sci-news-item-list';

  /**
   * All news items
   */
  @Input() newsItems!: NewsItem[];

  /**
   * News items to be displayed
   */
  displayedNewsItems!: NewsItem[];

  /**
   * Order for date sorting (ascending or descending)
   */
  dateOrder = 'asc';

  /**
   * Order for title sorting (ascending or descending)
   */
  titleOrder = 'asc';

  /**
   * Order for publication sorting (ascending or descending)
   */
  publicationOrder = 'asc';

  /**
   * Whether all items should be displayed
   */
  showAllItems = false;

  /**
   * Currently selected year
   */
  selectedYear = 'All';

  /**
   * Sorts all items by date on init
   */
  ngOnInit(): void {
    this.displayedNewsItems = this.newsItems;
    this.sort('date');
  }

  /**
   * Sorts displayed news items according to criteria
   * @param criteria Criteria to be sorted by
   */
  sort(criteria: 'date' | 'publication' | 'title'): void {
    let order;
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

  /**
   * Comparison function for NewsItems
   * @param key Criteria being compared
   * @param order order to compare
   * @returns 1 if a[key] is greater than b[key], -1 if less (opposite for descending). 0 if equal.
   */
  compareValues(key: 'date' | 'publication' | 'title', order: string): (a: NewsItem, b: NewsItem) => number {
    return (a, b) => {
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

  /**
   * List of options to be displayed in year select dropdown
   */
  get yearList(): string[] {
    const years = this.newsItems.map(item => item.date.getFullYear().toString());
    return ['All'].concat([...new Set(years)]);
  }

  /**
   * Filters displayed news items by selected year
   * @param value Selected value
   */
  onYearChange(value: string): void {
    this.sort('date');
    if (value === 'All') {
      this.displayedNewsItems = [...this.newsItems];
    } else {
      this.displayedNewsItems = [...this.newsItems].filter((item) => item.date.getFullYear().toString() === value);
    }
  }

  /**
   * Text to be displayed in show more button
   */
  get showButtonText(): string {
    return (this.showAllItems) ? 'Show Less' : 'Show More';
  }

  /**
   * Determines if show more button should be shown
   * @returns true if there are 4 or fewer items displayed
   */
  needShowMoreButton(): boolean {
    return (this.displayedNewsItems.length < 5) ? false : true;
  }
}
