import { Component, Input, OnInit } from '@angular/core';
import { Venue } from '../../../pages/venues/venues-resolver.service';

@Component({
  selector: 'sci-venues-list',
  templateUrl: './venues-list.component.html',
  styleUrls: ['./venues-list.component.scss']
})
export class VenuesListComponent implements OnInit {

  @Input() items: Venue[] = [];
  
  displayLimit = 6;
  showAllItems = false;
  
  get totalResultsText(): string {
    const denominator = this.items.length;
    let numerator: number = denominator;
    if (!this.showAllItems && denominator > this.displayLimit) {
      numerator = this.displayLimit;
    }
    return `${numerator} / ${denominator}`;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
