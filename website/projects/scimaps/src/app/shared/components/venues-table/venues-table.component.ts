import { AfterViewInit, ChangeDetectorRef, Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { getSegmentedDate } from '../../../constants/utils';
import { Venue } from '../../../pages/venues/venues-resolver.service';

@Component({
  selector: 'sci-venues-table',
  templateUrl: './venues-table.component.html',
  styleUrls: ['./venues-table.component.scss']
})
export class VenuesTableComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() filterString = '';
  @HostBinding('class') readonly clsName = 'sci-venues-table';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  @Input() initialSort: {column: string, direction: 'asc' | 'desc'} = {column: '', direction: 'asc' };
  // tslint:disable-next-line: no-any
  @Input() dataSource: MatTableDataSource<any> = new MatTableDataSource();
  @Input() tableHeaders: {
    key: string,
    label: string,
    width?: number,
    type?: string,
    icon?: string
  }[] = [];
  columns: string[] = [];

  constructor(private router: Router, private cdr: ChangeDetectorRef) {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.hasOwnProperty('filterString')) {
      if(this.paginator) {
        this.paginator.firstPage();
        this.dataSource.filter = this.filterString;
      }
    }
  }

  ngOnInit(): void {
    this.columns = this.tableHeaders.map(header => header.key);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.matSort;

    // initial sort of dateStart
    if (this.initialSort && this.columns.includes(this.initialSort.column)) {
      this.matSort.sort({ id: '', start: 'asc', disableClear: true });
      this.matSort.sort({ id: this.initialSort.column, start: this.initialSort.direction, disableClear: false });
      const sortable = this.matSort.sortables.get(this.initialSort.column) as MatSortHeader;
      if (sortable) {
        sortable._setAnimationTransitionState({ toState: 'active' });
      }
      this.cdr.detectChanges();
    }
  }

  gotoGallery(item: Venue): void {
    const [year, month, date] = getSegmentedDate(item.dateStart);
    this.router.navigate(['/', 'venues', 'gallery', year, `${month}-${date}`, item.slug]);
  }

  getLocation(venue: Venue): string {
    return [venue.city, venue.state, venue.country].filter(value => value).join(', ');
  }

  openLink(link: string): void {
    if (link) {
      window.open(link, '_blank');
    }
  }
}
