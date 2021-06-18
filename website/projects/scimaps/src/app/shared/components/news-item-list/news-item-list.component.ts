import { animate, AnimationEvent, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, Input, HostBinding, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { of, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';

import { NewsItem } from '../news-item/news-item.model';

type SortColumn = 'publication' | 'date' | 'title';
/**
 * Component for displaying news items
 */
@Component({
  selector: 'sci-news-item-list',
  templateUrl: './news-item-list.component.html',
  styleUrls: ['./news-item-list.component.scss'],
  animations: [
    trigger('isSearchOpenTrigger', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(25%)'
        }),
        animate('100ms ease-in', style({
          opacity: 1,
          transform: 'translateX(0%)'
        }))
      ]),
      transition(':leave', [
        style({
          opacity: 1
        }),
        animate('100ms ease-out', style({
          opacity: 0,
          transform: 'translateX(25%)'
        }))
      ]),
    ])
  ]
})
export class NewsItemListComponent implements OnInit, OnDestroy {
  /**
   * Component class name
   */
  @HostBinding('class') readonly clsName = 'sci-news-item-list';

  /**
   * All news items
   */
  @Input() newsItems: NewsItem[] = [];

  @ViewChild('searchInput') searchInput: ElementRef | undefined;

  /**
   * News items to be displayed
   */
  displayedNewsItems: NewsItem[] = [];

  /**
   * Order for date sorting (ascending or descending)
   */
  dateOrder: 'asc' | 'desc' = 'asc';

  /**
   * Order for title sorting (ascending or descending)
   */
  titleOrder: 'asc' | 'desc' = 'asc';

  /**
   * Order for publication sorting (ascending or descending)
   */
  publicationOrder: 'asc' | 'desc' = 'asc';

  /**
   * Whether all items should be displayed
   */
  showAllItems = false;
  isSearchOpen = false;
  displayLimit = 6;

  searchForm: FormGroup;
  yearChangeSubscription: Subscription | undefined;
  searchChangeSubscription: Subscription | undefined;


  /**
   * List of options to be displayed in year select dropdown
   */
  get yearList(): string[] {
    const years = this.newsItems.map((item: NewsItem) => {
      const fullDate = new Date(item.date);
      return fullDate.getFullYear().toString();
    });
    return [...new Set(years)];
  }

  get searchControl(): AbstractControl | undefined {
    let result: AbstractControl | undefined;
    if (this.searchForm) {
      const searchControl = this.searchForm.get('search');
      if (searchControl) {
        result = searchControl;
      }
    }
    return result;
  }

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      year: this.fb.control(''),
      search: this.fb.control('')
    });
  }

  /**
   * Sorts all items by date on init
   */
  ngOnInit(): void {
    this.displayedNewsItems = this.newsItems;
    // Initialize listener for search input change
    this.searchChangeSubscription = this.searchControl?.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      map((searcKey: string) => {
        return searcKey.trim().toLowerCase();
      }),
      switchMap((searchKey: string) => {
        return of(searchKey);
      })
    ).subscribe((searchKey: string) => {
      const year = this.searchForm.get('year')?.value;
      this.filterData({ year, searchKey });
    });
    this.searchControl?.setValue('');
    this.sort('publication', 'asc');

    // Initalize listener for year dropdown change
    this.yearChangeSubscription = this.searchForm.get('year')?.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((year: string) => {
        return of(year);
      })
    ).subscribe((year: string) => {
      let searchKey = this.searchForm.get('search')?.value;
      searchKey = searchKey.trim().toLowerCase();
      this.filterData({ searchKey, year });
    });
  }

  /**
   * Sorts displayed news items according to criteria
   * @param criteria Criteria to be sorted by
   */
  toggleSort(criteria: SortColumn): void {
    let order: 'asc' | 'desc';
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
    this.sort(criteria, order);
  }

  sort(criteria: SortColumn, order: 'asc' | 'desc'): void {
    this.displayedNewsItems = [...this.displayedNewsItems].sort(this.compareValues(criteria, order));

    if (criteria === 'date') {
      this.dateOrder = order;
    }
    else if (criteria === 'publication') {
      this.publicationOrder = order;
    }
    else if (criteria === 'title') {
      this.titleOrder = order;
    }
  }

  /**
   * Comparison function for NewsItems
   * @param key Criteria being compared
   * @param order order to compare
   * @returns 1 if a[key] is greater than b[key], -1 if less (opposite for descending). 0 if equal.
   */
  compareValues(key: SortColumn, order: string): (a: NewsItem, b: NewsItem) => number {
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

  // Predicate for filtering data.
  filterData(filter: { searchKey: string, year: string }): void {
    const predicateFilter = (item: NewsItem) => {
      let result = true;
      // year
      if (filter.year) {
        const year = new Date(item.date).getFullYear().toString();
        result = result && (year === filter.year);
      }
      // SearchKey
      if (filter.searchKey) {
        result = result &&
          (item.title.toLowerCase().includes(filter.searchKey) ||
            item.publication.toLowerCase().includes(filter.searchKey));
      }
      return result;
    };
    this.displayedNewsItems = [...this.newsItems].filter(predicateFilter);
  }

  /**
   * Text to be displayed in show more button
   */
  get showButtonText(): string {
    return (this.showAllItems) ? 'Show Less' : 'Show More News';
  }

  /**
   * Determines if show more button should be shown
   * @returns true if there are 4 or fewer items displayed
   */
  needShowMoreButton(): boolean {
    return (this.displayedNewsItems.length > this.displayLimit) ? true : false;
  }

  // After Animation hook
  afterAnimation(event: AnimationEvent): void {
    if (event.fromState === 'void') {
      if (this.searchInput) {
        this.searchInput.nativeElement.focus();
      }
    }
  }

  clearSearch(): void {
    if (this.searchControl) {
      this.searchControl.setValue('');
    }
  }

  ngOnDestroy(): void {
    if (this.yearChangeSubscription) {
      this.yearChangeSubscription.unsubscribe();
    }
    if (this.searchChangeSubscription) {
      this.searchChangeSubscription.unsubscribe();
    }
  }
}
