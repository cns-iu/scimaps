import { AfterViewInit, Component, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Params } from '@angular/router';
import { Venue } from '../../../pages/venues/venues-resolver.service';

@Component({
  selector: 'sci-sort-headers',
  templateUrl: './sort-headers.component.html',
  styleUrls: ['./sort-headers.component.scss']
})
export class SortHeadersComponent implements OnInit, AfterViewInit {
  @HostBinding('class') readonly clsName = 'sci-sort-headers';
  @ViewChild(MatSort) matSort!: MatSort;
  @Input() dataSource: MatTableDataSource<Venue> = new MatTableDataSource();
  @Input() tableHeaders: {key: string, label: string, width: number, type: string}[] = [];
  columns: string[] = [];
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.dataSource);
    this.columns = this.tableHeaders.map(header => header.key);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.matSort;
  }
  

}
