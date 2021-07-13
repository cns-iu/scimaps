import { Component, Input, OnInit } from '@angular/core';
import { Venue } from '../../../pages/venues/venues-resolver.service';

@Component({
  selector: 'sci-venues-list',
  templateUrl: './venues-list.component.html',
  styleUrls: ['./venues-list.component.scss']
})
export class VenuesListComponent implements OnInit {

  @Input() venues: Venue[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
