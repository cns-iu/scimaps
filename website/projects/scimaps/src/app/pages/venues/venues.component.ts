import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TableData } from '../../core/models/table-data';
import { MatTableDataSource } from '@angular/material/table';
import { Venue } from './venues-resolver.service';
import { isSearchOpenTrigger } from '../../constants/drawer.animations';
import { VenuesBody } from './venues-body-resolver.service';
@Component({
  selector: 'sci-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.scss'],
  animations: [isSearchOpenTrigger ]
})
export class VenuesComponent implements OnInit {

  /** HTML class name */
  @HostBinding('class') readonly className = 'sci-venues';

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {
  }
  // table
  tableHeaders = [
    { label: 'Start', key: 'dateStart', type: 'date', width: 15}, 
    { label: 'End', key: 'dateEnd', type: 'date', width: 15 },
    { label: 'Event', key: 'title', type: 'text', width: 30},
    { label: 'Location', key: 'city', type: 'text', width: 20},
    { label: 'Contact', key: 'organizer', type: 'text', width: 20}
  ]
  dataSource: MatTableDataSource<Venue> = new MatTableDataSource();
  // this page
  body!: VenuesBody;

  searchKey = ''
  year = '';

  get yearList(): string[] {
    const years = this.dataSource.data.map((item: Venue) => {
      const fullDate = new Date(item.dateStart);
      return fullDate.getFullYear().toString();
    });
    return [...new Set(years)];
  }

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

  
  onSearchChange(searchKey: string) {
    this.searchKey = searchKey;
    this.applyFilter();
  }
  onSelectChange(year: string) {
    this.year = year;
    this.applyFilter();
  }
  applyFilter() {
    const filter = {year: this.year, searchKey: this.searchKey};
    const filterString = JSON.stringify(filter);
    this.dataSource.filter = filterString;
  }
}
