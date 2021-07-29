import { AfterViewInit, ChangeDetectorRef, Component, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
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
export class VenuesTableComponent implements OnInit, AfterViewInit {
  @HostBinding('class') readonly clsName = 'sci-venues-table';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  // tslint:disable-next-line: no-any
  @Input() initialSort: {column: string, direction: "asc" | "desc"} = {column: '', direction: 'asc' };
  @Input() dataSource: MatTableDataSource<any> = new MatTableDataSource();
  @Input() tableHeaders: {
    key: string,
    label: string,
    width?: number,
    type?: string,
    icon?: string
  }[] = [];
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

  openVenueGalleryDrawer(item: Params): void {
    this.store.dispatch(new SetAppState({
      drawer: {
        showDrawer: true,
        drawerName: 'venue-gallery-drawer',
        drawerPayload: item
      }
    }));
  }
}
