import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { of, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { NewsItem } from '../news-item/news-item.model';

@Component({
  selector: 'sci-news-table',
  templateUrl: './news-table.component.html',
  styleUrls: ['./news-table.component.scss']
})
export class NewsTableComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() data: NewsItem[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource(this.data);
  yearList = ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015',
    '2016', '2017', '2018', '2019', '2020', '2021'];
  columns = ['date', 'title', 'publication', 'author', 'pdfLink'];
  searchForm!: FormGroup;
  searchChangeSubscription: Subscription | undefined;
  yearChangeSubscription: Subscription | undefined;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dataSource.data = this.data;

    this.dataSource.filterPredicate = this.filterData;
    this.searchForm = this.formBuilder.group({
      year: this.formBuilder.control(''),
      search: this.formBuilder.control('')
    });

    this.searchChangeSubscription = this.searchForm.get('search')?.valueChanges.pipe(
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
      this.dataSource.filter = JSON.stringify({ year, searchKey });
    });

    this.yearChangeSubscription = this.searchForm.get('year')?.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((year: string) => {
        return of(year);
      })
    ).subscribe((year: string) => {
      let searchKey = this.searchForm.get('search')?.value;
      searchKey = searchKey.trim().toLowerCase();
      this.dataSource.filter = JSON.stringify({ year, searchKey });
    });
  }

  // Predicate for filtering data.
  filterData(item: NewsItem, filter: string): boolean {
    const parsedFilter = JSON.parse(filter);
    let result = true;
    if (parsedFilter.year && parsedFilter.year !== 'all') {
      const year = new Date(item.date).getFullYear().toString();
      result = result && (year === parsedFilter.year);
    }

    if (parsedFilter.searchKey) {
      result = result &&
        (item.title.toLowerCase().includes(parsedFilter.searchKey) ||
          item.publication.toLowerCase().includes(parsedFilter.searchKey));
    }
    return result;
  }


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    if (this.searchChangeSubscription) {
      this.searchChangeSubscription.unsubscribe();
    }
    if (this.yearChangeSubscription) {
      this.yearChangeSubscription.unsubscribe();
    }
  }
}
