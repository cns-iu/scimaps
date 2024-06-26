import { Component, HostBinding, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { VenuesBody } from './venues-body-resolver.service';
import { Venue } from './venues-resolver.service';
@Component({
  selector: 'sci-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.scss']
})
export class VenuesComponent implements OnInit {
  /** HTML class name */
  @HostBinding('class') readonly className = 'sci-venues';
  filterString = '';

  constructor(
    private activatedRoute: ActivatedRoute
  ) {}
  // table
  tableHeaders = [
    { label: 'Start', key: 'dateStart', type: 'date', width: 15 },
    { label: 'End', key: 'dateEnd', type: 'date', width: 15 },
    { label: 'Event', key: 'title', type: 'text', width: 25 },
    { label: 'Location', key: 'city', type: 'text', width: 20 },
    { label: 'Contact', key: 'organizer', type: 'text', width: 20 },
    { label: 'Media', key: 'venueImages', type: 'icon', icon: 'image', width: 5 },
  ];
  sortHeaders = this.tableHeaders.filter(item => {
    return item.key === 'dateStart' || item.key === 'title' || item.key === 'city';
  });
  dataSource: MatTableDataSource<Venue> = new MatTableDataSource();
  // this page
  body!: VenuesBody;

  searchKey = '';
  year = '';
  yearList: string[] = [];

  ngOnInit(): void {
    // data
    this.activatedRoute.data.subscribe((data) => {
      const { venues, body } = data;
      this.body = body;
      if (venues && Array.isArray(venues)) {
        this.dataSource.data = venues;
        // Assign predicate
        this.dataSource.filterPredicate = this.filterData;
      }
    });
    this.setYears();
  }

  setYears(): void {
    const years  = new Set<string>();
    this.dataSource.data.forEach((item: Venue) => {
      const fullDate = new Date(item.dateStart);
      const year = fullDate.getUTCFullYear().toString();
      if (!years.has(year)) {
        years.add(year);
      }
    });
    this.yearList = Array.from(years).sort().reverse();
  }

  // Predicate for filtering data.
  filterData(item: Venue, filter: string): boolean {
    const parsedFilter = JSON.parse(filter);
    let result = true;
    if (parsedFilter.year && parsedFilter.year !== 'all') {
      const year = new Date(item.dateStart).getFullYear().toString();
      result = result && year === parsedFilter.year;
    }

    if (parsedFilter.searchKey) {
      result =
        result &&
        (item.title?.toLowerCase().includes(parsedFilter.searchKey) ||
          item.venue?.toLowerCase().includes(parsedFilter.searchKey));
    }
    return result;
  }

  onSearchChange(searchKey: string): void {
    this.searchKey = searchKey;
    this.applyFilter();
  }
  onSelectChange(year: string): void {
    this.year = year;
    this.applyFilter();
  }
  applyFilter(): void {
    const filter = { year: this.year, searchKey: this.searchKey };
    this.filterString = JSON.stringify(filter);
  }
}
