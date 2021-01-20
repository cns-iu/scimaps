import { Component, HostBinding, Input } from '@angular/core';
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
  sort: 'startDate' | 'endDate' | 'eventName' | 'location' | 'contact' | 'media' = 'startDate';
  sortDirection: 'ascending' | 'descending' = 'ascending';
}
