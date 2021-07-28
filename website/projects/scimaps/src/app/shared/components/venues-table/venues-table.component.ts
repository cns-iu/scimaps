import { ChangeDetectorRef, Component, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Params } from '@angular/router';
import { Store } from '@ngxs/store';
import { SetAppState } from '../../../core/actions/app.actions';

@Component({
  selector: 'sci-venues-table',
  templateUrl: './venues-table.component.html',
  styleUrls: ['./venues-table.component.scss']
})
export class VenuesTableComponent implements OnInit {
  @HostBinding('class') readonly clsName = 'sci-venues-table';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  // tslint:disable-next-line: no-any
  @Input() dataSource: MatTableDataSource<any> = new MatTableDataSource();
  @Input() tableHeaders: {
    key: string,
    label: string,
    width?: number,
    type?: string,
    icon?: string
  }[] = [];
  @Input() headersOnly = false;
  columns: string[] = [];

  constructor(private store: Store, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.columns = this.tableHeaders.map(header => header.key);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.matSort;

    // initial sort of dateStart
    this.matSort.sort({ id: '', start: 'asc', disableClear: true });
    this.matSort.sort({ id: 'dateStart', start: 'desc', disableClear: false });
    (this.matSort.sortables.get('dateStart') as MatSortHeader)._setAnimationTransitionState({ toState: 'active' });
    this.cdr.detectChanges();
  }

  openVenueGalleryDrawer(item: Params): void {
    this.store.dispatch(new SetAppState({drawer: {
      showDrawer: true,
      drawerName: 'venue-gallery',
      drawerPayload: item
    }}));
  }
}
