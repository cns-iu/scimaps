import { AfterViewInit, ChangeDetectorRef, Component, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'sci-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  @HostBinding('class') readonly clsName = 'sci-table';
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
  @Input() initialSort: {column: string, direction: 'asc' | 'desc'} = {column: '', direction: 'asc' };
  columns: string[] = [];

  constructor(private cdr: ChangeDetectorRef) {}
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
}
