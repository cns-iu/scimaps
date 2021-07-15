import { AfterViewInit, Component, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Venue } from '../../../pages/venues/venues-resolver.service';

@Component({
  selector: 'sci-venues-table',
  templateUrl: './venues-table.component.html',
  styleUrls: ['./venues-table.component.scss']
})
export class VenuesTableComponent implements OnInit, AfterViewInit {
  @HostBinding('class') readonly clsName = 'sci-venues-table';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Input() dataSource: MatTableDataSource<Venue> = new MatTableDataSource();
  @Input() tableHeaders: {key: string, label: string, width: number, type: string}[] = [];

  columns: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.columns = this.tableHeaders.map(header => header.key);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
