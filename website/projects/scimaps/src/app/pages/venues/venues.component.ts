import { AfterViewInit, Component, ElementRef, HostBinding, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { TableData } from '../../core/models/table-data';
import { MatTableDataSource } from '@angular/material/table';
import { TableHeader } from '../../core/models/table-header';
import { Venue } from './venues-resolver.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { isSearchOpenTrigger } from '../../constants/drawer.animations';
import { AnimationEvent } from '@angular/animations';
import { VenuesBody } from './venues-body-resolver.service';
@Component({
  selector: 'sci-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.scss'],
  animations: [isSearchOpenTrigger ]
})
export class VenuesComponent implements OnInit, OnDestroy {

  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-venues';

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {
  }
  venues: Venue[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  searchForm!: FormGroup;
  searchChangeSubscription: Subscription | undefined;
  yearChangeSubscription: Subscription | undefined;
  isSearchOpen = false;
  tableHeaders = [
    { label: 'Start', key: 'dateStart', type: 'date', width: 15}, 
    { label: 'End', key: 'dateEnd', type: 'date', width: 15 },
    { label: 'Event', key: 'title', type: 'text', width: 30},
    { label: 'Location', key: 'city', type: 'text', width: 20},
    { label: 'Contact', key: 'organizer', type: 'text', width: 20}
  ]
  @ViewChild('searchInput') searchInput: ElementRef | undefined;
  
  dataSource: MatTableDataSource<Venue> = new MatTableDataSource();

  body!: VenuesBody;

  get yearList(): string[] {
    const years = this.venues.map((item: Venue) => {
      const fullDate = new Date(item.dateStart);
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
  ngOnInit(): void {
    // data
    this.activatedRoute.data.subscribe((data) => {
      const { venues, body } = data;
      this.body = body;
      console.log(this.body)
      if (venues && Array.isArray(venues)) {
        this.venues = venues; 
        this.dataSource.data = this.venues;
        // Assign predicate
        this.dataSource.filterPredicate = this.filterData;
      }
    });

    

    // Initialize form
    this.searchForm = this.formBuilder.group({
      year: this.formBuilder.control(''),
      search: this.formBuilder.control('')
    });

    // Initialize listener for search input change
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
      this.dataSource.filter = JSON.stringify({ year, searchKey });
    });
  }


  // Predicate for filtering data.
  filterData(item: Venue, filter: string): boolean {
    const parsedFilter = JSON.parse(filter);
    let result = true;
    if (parsedFilter.year && parsedFilter.year !== 'all') {
      const year = new Date(item.dateStart).getFullYear().toString();
      result = result && (year === parsedFilter.year);
    }

    if (parsedFilter.searchKey) {
      result = result &&
        (item.title?.toLowerCase().includes(parsedFilter.searchKey) ||
          item.venue?.toLowerCase().includes(parsedFilter.searchKey));
    }
    return result;
  }

  ngOnDestroy(): void {
    if (this.searchChangeSubscription) {
      this.searchChangeSubscription.unsubscribe();
    }
    if (this.yearChangeSubscription) {
      this.yearChangeSubscription.unsubscribe();
    }
  }

  cardHeaderFunction = (row: TableData) => {
    return `${row.startDate.label} - ${row.endDate.label}`;
  }

  cardLinkFunction = (row: TableData) => {
    return row.media.links !== undefined ? row.media.links : [];
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
}
