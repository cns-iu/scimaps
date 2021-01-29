import { Component, HostBinding } from '@angular/core';

import { TableHeader } from '../../core/models/table-header';
import { Venue } from '../../core/models/venue';

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

  testVenues: Venue[] = [
    {
      startDate: '9/2/2020',
      endDate: '9/30/2020',
      event: 'Technology Petting Zoo',
      location: 'Indiana University UITS, Bloomington, IN',
      contact: 'Jeannette Lehr',
      media: [
        {
          icon: 'insert_photo',
          url: 'www.google.com'
        }
      ]
    },
    {
      startDate: '3/2/2020',
      endDate: '5/1/2020',
      event: 'Women in Data Science 2020 (Regional Event)',
      location: 'UNAM, Mexico City',
      contact: 'Mariana Espinosa',
      media: [
        {
          icon: 'videocam',
          url: 'www.google.com'
        },
        {
          icon: 'insert_photo',
          url: 'www.google.com'
        }
      ]
    },
    {
      startDate: '1/29/2020',
      endDate: '',
      event: 'Tour for MetroStar Systems',
      location: 'Indiana University, Bloomington, IN',
      contact: '',
      media: [
        {
          icon: 'insert_photo',
          url: 'www.google.com'
        }
      ]
    },
    {
      startDate: '3/2/2020',
      endDate: '9/1/2020',
      event: 'Women in Data Science 2020 (Regional Event)',
      location: 'UNAM, Mexico City',
      contact: 'Mariana Espinosa',
      media: [
        {
          icon: 'videocam',
          url: 'www.google.com'
        },
        {
          icon: 'insert_photo',
          url: 'www.google.com'
        }
      ]
    },
    {
      startDate: '11/12/2020',
      endDate: '11/15/2020',
      event: 'Women in Data Science 2020 (Regional Event)',
      location: 'UNAM, Mexico City',
      contact: 'Mariana Espinosa',
      media: [
        {
          icon: 'videocam',
          url: 'www.google.com'
        },
        {
          icon: 'insert_photo',
          url: 'www.google.com'
        }
      ]
    },
    {
      startDate: '9/2/2020',
      endDate: '9/30/2020',
      event: 'Technology Petting Zoo',
      location: 'Indiana University UITS, Bloomington, IN',
      contact: 'Jeannette Lehr',
      media: [
        {
          icon: 'insert_photo',
          url: 'www.google.com'
        }
      ]
    },
    {
      startDate: '3/2/2020',
      endDate: '5/1/2020',
      event: 'Women in Data Science 2020 (Regional Event)',
      location: 'UNAM, Mexico City',
      contact: 'Mariana Espinosa',
      media: [
        {
          icon: 'videocam',
          url: 'www.google.com'
        },
        {
          icon: 'insert_photo',
          url: 'www.google.com'
        }
      ]
    },
    {
      startDate: '1/29/2020',
      endDate: '',
      event: 'Tour for MetroStar Systems',
      location: 'Indiana University, Bloomington, IN',
      contact: '',
      media: [
        {
          icon: 'insert_photo',
          url: 'www.google.com'
        }
      ]
    },
    {
      startDate: '3/2/2020',
      endDate: '9/1/2020',
      event: 'Women in Data Science 2020 (Regional Event)',
      location: 'UNAM, Mexico City',
      contact: 'Mariana Espinosa',
      media: [
        {
          icon: 'videocam',
          url: 'www.google.com'
        },
        {
          icon: 'insert_photo',
          url: 'www.google.com'
        }
      ]
    },
    {
      startDate: '11/12/2020',
      endDate: '11/15/2020',
      event: 'Women in Data Science 2020 (Regional Event)',
      location: 'UNAM, Mexico City',
      contact: 'Mariana Espinosa',
      media: [
        {
          icon: 'videocam',
          url: 'www.google.com'
        },
        {
          icon: 'insert_photo',
          url: 'www.google.com'
        }
      ]
    },
    {
      startDate: '9/2/2020',
      endDate: '9/30/2020',
      event: 'Technology Petting Zoo',
      location: 'Indiana University UITS, Bloomington, IN',
      contact: 'Jeannette Lehr',
      media: [
        {
          icon: 'insert_photo',
          url: 'www.google.com'
        }
      ]
    },
    {
      startDate: '3/2/2020',
      endDate: '5/1/2020',
      event: 'Women in Data Science 2020 (Regional Event)',
      location: 'UNAM, Mexico City',
      contact: 'Mariana Espinosa',
      media: [
        {
          icon: 'videocam',
          url: 'www.google.com'
        },
        {
          icon: 'insert_photo',
          url: 'www.google.com'
        }
      ]
    },
    {
      startDate: '1/29/2020',
      endDate: '',
      event: 'Tour for MetroStar Systems',
      location: 'Indiana University, Bloomington, IN',
      contact: '',
      media: [
        {
          icon: 'insert_photo',
          url: 'www.google.com'
        }
      ]
    },
    {
      startDate: '3/2/2020',
      endDate: '9/1/2020',
      event: 'Women in Data Science 2020 (Regional Event)',
      location: 'UNAM, Mexico City',
      contact: 'Mariana Espinosa',
      media: [
        {
          icon: 'videocam',
          url: 'www.google.com'
        },
        {
          icon: 'insert_photo',
          url: 'www.google.com'
        }
      ]
    },
    {
      startDate: '11/12/2020',
      endDate: '11/15/2020',
      event: 'Women in Data Science 2020 (Regional Event)',
      location: 'UNAM, Mexico City',
      contact: 'Mariana Espinosa',
      media: [
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
  ];
}
