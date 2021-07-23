import { AfterViewInit, Component, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Params } from '@angular/router';
import { Store } from '@ngxs/store';
import { SetAppState } from '../../../core/actions/app.actions';

@Component({
  selector: 'sci-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  @HostBinding('class') readonly clsName = 'sci-table';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
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

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.columns = this.tableHeaders.map(header => header.key);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.matSort;
  }

  openVenueGalleryDrawer(item: Params): void {
    this.store.dispatch(new SetAppState({drawer: {
      showDrawer: true,
      drawerName: 'venue-gallery',
      drawerPayload: item as Params
    }}));
  }
}
