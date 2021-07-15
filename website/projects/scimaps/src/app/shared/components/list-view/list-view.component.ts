import { Component, Input, OnInit } from '@angular/core';
import { Params } from '@angular/router';

export interface ListConfig {
  type: string;
  items: Params[];
  displayLimit: number;
  showAllItems: boolean;
}

@Component({
  selector: 'sci-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  @Input() config!: ListConfig;

  get totalResultsText(): string {
    const denominator = this.config.items.length;
    let numerator: number = denominator;
    if (!this.config.showAllItems && denominator > this.config.displayLimit) {
      numerator = this.config.displayLimit;
    }
    return `${numerator} / ${denominator}`;
  }
  constructor() { }

  ngOnInit(): void {
  }
}
