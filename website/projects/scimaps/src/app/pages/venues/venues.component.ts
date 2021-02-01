import { Component, HostBinding } from '@angular/core';
import { TableData } from '../../core/models/table-data';

import { TableHeader } from '../../core/models/table-header';

@Component({
  selector: 'sci-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.scss']
})
export class VenuesComponent {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-venues';

  tableHeaders: TableHeader[] = [
    {
      label: 'Start',
      key: 'startDate',
      format: 'text'
    },
    {
      label: 'End',
      key: 'endDate',
      format: 'text'
    },
    {
      label: 'Event',
      key: 'event',
      format: 'text'
    },
    {
      label: 'Location',
      key: 'location',
      format: 'text'
    },
    {
      label: 'Contact',
      key: 'contace',
      format: 'text'
    },
    {
      label: 'Media',
      key: 'media',
      format: 'icon'
    }
  ];

  testVenues: TableData[] = [
    {
      startDate: {
        label: '9/2/2020',
        type: 'date'
      },
      endDate: {
        label: '9/30/2020',
        type: 'date'
      },
      event: {
        label: 'Technology Petting Zoo',
        type: 'text'
      },
      location: {
        label: 'Indiana University UITS, Bloomington, IN',
        type: 'text'
      },
      contact: {
        label: 'Jeannette Lehr',
        type: 'text'
      },
      media: {
        label: 'Media',
        type: 'icons',
        links: [
          {
            icon: 'insert_photo',
            url: 'www.google.com'
          }
        ]
      }
    },
    {
      startDate: {
        label: '3/2/2020',
        type: 'date'
      },
      endDate: {
        label: '5/1/2020',
        type: 'date'
      },
      event: {
        label: 'Women in Data Science 2020 (Regional Event)',
        type: 'text'
      },
      location: {
        label: 'UNAM, Mexico City',
        type: 'text'
      },
      contact: {
        label: 'Mariana Espinosa',
        type: 'text'
      },
      media: {
        label: 'Media',
        type: 'icons',
        links: [
          {
            icon: 'videocam',
            url: 'www.google.com'
          },
          {
            icon: 'insert_photo',
            url: 'www.google.com'
          }
        ]
      }
    }
  ];
}
