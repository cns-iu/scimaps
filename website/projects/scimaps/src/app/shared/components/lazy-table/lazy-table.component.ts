import { Component, HostBinding, Input } from '@angular/core';
import { TableHeader } from '../../../core/models/table-header';
import { Venue } from '../../../core/models/venue';

@Component({
  selector: 'sci-lazy-table',
  templateUrl: './lazy-table.component.html',
  styleUrls: ['./lazy-table.component.scss']
})
export class LazyTableComponent {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-lazy-table';
  @Input() data!: Venue[];
  @Input() itemsPerPage!: number;
  @Input() headers!: TableHeader[];
  @Input() sort!: string;
  @Input() sortDirection: 'ascending' | 'descending' = 'ascending';

  ngOnInit(): void {
    console.log('data: ', this.data);
  }
}
