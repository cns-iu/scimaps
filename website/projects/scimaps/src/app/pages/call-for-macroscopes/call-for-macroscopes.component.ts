import { Component } from '@angular/core';

@Component({
  selector: 'sci-call-for-macroscopes',
  templateUrl: './call-for-macroscopes.component.html',
  styleUrls: ['./call-for-macroscopes.component.scss']
})
export class CallForMacroscopesComponent {
  importantDates: Array<[string, string]> = [
    ['Sunmissions due', 'February 1, 2020'],
    ['Notification to mapmakers', 'March 15, 2020'],
    ['Submit final entries', 'May 1, 2020'],
    ['Iteration ready for display', 'September 1, 2020']
  ];
}
