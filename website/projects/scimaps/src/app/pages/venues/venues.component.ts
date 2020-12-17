import { Component, HostBinding } from '@angular/core';
import { Venue } from '../../core/models/venue';

@Component({
  selector: 'sci-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.scss']
})
export class VenuesComponent {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-venues';

  testVenues: Venue[] = [
    {
      startDate: '9/2/2020',
      endDate: '9/30/2020',
      event: 'Technology Petting Zoo',
      location: 'Indiana University UITS, Bloomington, IN',
      contact: 'Jeannette Lehr',
      photoLink: 'www.google.com'
    },
    {
      startDate: '3/2/2020',
      endDate: '5/1/2020',
      event: 'Women in Data Science 2020 (Regional Event)',
      location: 'UNAM, Mexico City',
      contact: 'Mariana Espinosa',
      photoLink: 'www.google.com',
      videoLink: 'www.google.com'
    },
    {
      startDate: '1/29/2020',
      endDate: '',
      event: 'Tour for MetroStar Systems',
      location: 'Indiana University, Bloomington, IN',
      contact: '',
      photoLink: 'www.google.com'
    },
    {
      startDate: '3/2/2020',
      endDate: '9/1/2020',
      event: 'Women in Data Science 2020 (Regional Event)',
      location: 'UNAM, Mexico City',
      contact: 'Mariana Espinosa',
      photoLink: 'www.google.com',
      videoLink: 'www.google.com'
    },
    {
      startDate: '11/12/2020',
      endDate: '11/15/2020',
      event: 'Women in Data Science 2020 (Regional Event)',
      location: 'UNAM, Mexico City',
      contact: 'Mariana Espinosa',
      photoLink: 'www.google.com',
      videoLink: 'www.google.com'
    },
    {
      startDate: '9/2/2020',
      endDate: '9/30/2020',
      event: 'Technology Petting Zoo',
      location: 'Indiana University UITS, Bloomington, IN',
      contact: 'Jeannette Lehr',
      photoLink: 'www.google.com'
    },
    {
      startDate: '3/2/2020',
      endDate: '5/1/2020',
      event: 'Women in Data Science 2020 (Regional Event)',
      location: 'UNAM, Mexico City',
      contact: 'Mariana Espinosa',
      photoLink: 'www.google.com',
      videoLink: 'www.google.com'
    },
    {
      startDate: '1/29/2020',
      endDate: '',
      event: 'Tour for MetroStar Systems',
      location: 'Indiana University, Bloomington, IN',
      contact: '',
      photoLink: 'www.google.com'
    },
    {
      startDate: '3/2/2020',
      endDate: '9/1/2020',
      event: 'Women in Data Science 2020 (Regional Event)',
      location: 'UNAM, Mexico City',
      contact: 'Mariana Espinosa',
      photoLink: 'www.google.com',
      videoLink: 'www.google.com'
    },
    {
      startDate: '11/12/2020',
      endDate: '11/15/2020',
      event: 'Women in Data Science 2020 (Regional Event)',
      location: 'UNAM, Mexico City',
      contact: 'Mariana Espinosa',
      photoLink: 'www.google.com',
      videoLink: 'www.google.com'
    },
    {
      startDate: '9/2/2020',
      endDate: '9/30/2020',
      event: 'Technology Petting Zoo',
      location: 'Indiana University UITS, Bloomington, IN',
      contact: 'Jeannette Lehr',
      photoLink: 'www.google.com'
    },
    {
      startDate: '3/2/2020',
      endDate: '5/1/2020',
      event: 'Women in Data Science 2020 (Regional Event)',
      location: 'UNAM, Mexico City',
      contact: 'Mariana Espinosa',
      photoLink: 'www.google.com',
      videoLink: 'www.google.com'
    },
    {
      startDate: '1/29/2020',
      endDate: '',
      event: 'Tour for MetroStar Systems',
      location: 'Indiana University, Bloomington, IN',
      contact: '',
      photoLink: 'www.google.com'
    },
    {
      startDate: '3/2/2020',
      endDate: '9/1/2020',
      event: 'Women in Data Science 2020 (Regional Event)',
      location: 'UNAM, Mexico City',
      contact: 'Mariana Espinosa',
      photoLink: 'www.google.com',
      videoLink: 'www.google.com'
    },
    {
      startDate: '11/12/2020',
      endDate: '11/15/2020',
      event: 'Women in Data Science 2020 (Regional Event)',
      location: 'UNAM, Mexico City',
      contact: 'Mariana Espinosa',
      photoLink: 'www.google.com',
      videoLink: 'www.google.com'
    }
  ];
}
