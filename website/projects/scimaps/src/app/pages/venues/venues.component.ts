import { AfterViewInit, Component, HostBinding, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { TableData } from '../../core/models/table-data';
import { MatTableDataSource } from '@angular/material/table';
import { TableHeader } from '../../core/models/table-header';
import { Venue } from './venues-resolver.service';

@Component({
  selector: 'sci-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.scss']
})
export class VenuesComponent implements OnInit, AfterViewInit, OnDestroy {

  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-venues';

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {
  }
  venues: Venue[] = [];
  // @ViewChild(MatPaginator) paginator!;
  // @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource(this.venues);
  yearList = ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015',
    '2016', '2017', '2018', '2019', '2020', '2021'];
  searchForm!: FormGroup;
  searchChangeSubscription: Subscription | undefined;
  yearChangeSubscription: Subscription | undefined;
  tableHeaders = [
    { label: 'Start', key: 'dateStart', type: 'date'}, 
    { label: 'End', key: 'dateEnd', type: 'date' },
    { label: 'Event', key: 'title', type: 'text'},
    { label: 'Location', key: 'city', type: 'text'},
    { label: 'Contact', key: 'organizer', type: 'text'}
  ]
  columns = this.tableHeaders.map(header => header.key);
  ngOnInit(): void {
    // data
    this.activatedRoute.data.subscribe((data) => {
      const { venues } = data;
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
        (item.title.toLowerCase().includes(parsedFilter.searchKey) ||
          item.venue.toLowerCase().includes(parsedFilter.searchKey));
    }
    return result;
  }


  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    if (this.searchChangeSubscription) {
      this.searchChangeSubscription.unsubscribe();
    }
    if (this.yearChangeSubscription) {
      this.yearChangeSubscription.unsubscribe();
    }
  }

  testVenues: TableData[] = [
    {
      startDate: {
        label: '9/2/2020',
        type: 'date'
      },
      endDate: {
        label: '9/30/2020',
        type: 'date'
      },
      event: {
        label: 'Technology Petting Zoo',
        type: 'text'
      },
      location: {
        label: 'Indiana University UITS, Bloomington, IN',
        type: 'text'
      },
      contact: {
        label: 'Jeannette Lehr',
        type: 'text'
      },
      media: {
        label: 'Media',
        type: 'icons',
        links: [
          {
            icon: 'insert_photo',
            url: 'www.google.com'
          }
        ]
      }
    },
    {
      startDate: {
        label: '3/2/2020',
        type: 'date'
      },
      endDate: {
        label: '5/1/2020',
        type: 'date'
      },
      event: {
        label: 'Women in Data Science 2020 (Regional Event)',
        type: 'text'
      },
      location: {
        label: 'UNAM, Mexico City',
        type: 'text'
      },
      contact: {
        label: 'Mariana Espinosa',
        type: 'text'
      },
      media: {
        label: 'Media',
        type: 'icons',
        links: [
          {
            icon: 'videocam',
            url: 'www.google.com'
          },
          {
            icon: 'insert_photo',
            url: 'www.google.com'
          }
        ]
      }
    }
  ];

  cardHeaderFunction = (row: TableData) => {
    return `${row.startDate.label} - ${row.endDate.label}`;
  }

  cardLinkFunction = (row: TableData) => {
    return row.media.links !== undefined ? row.media.links : [];
  }
}
function MatPaginator(MatPaginator: any) {
  throw new Error('Function not implemented.');
}

function MatSort(MatSort: any) {
  throw new Error('Function not implemented.');
}

