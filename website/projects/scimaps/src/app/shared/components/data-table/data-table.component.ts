import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NewsItem } from '../news-item/news-item.model';

@Component({
  selector: 'sci-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit, AfterViewInit {
  @Input() data: NewsItem[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource(this.data);
  yearList = ['2021', '2020']
  selectedYear = '2021';
  
  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.data;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onYearChange(year: string) {

  }
}
