import { Component, HostBinding, Input } from '@angular/core';
import { IconLink, TableData, TableField } from '../../../core/models/table-data';


@Component({
  selector: 'sci-lazy-cards',
  templateUrl: './lazy-cards.component.html',
  styleUrls: ['./lazy-cards.component.scss']
})
export class LazyCardsComponent {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-lazy-cards';

  @Input() data!: TableData[];
  @Input() itemsToDisplayIncrement = 6;
  @Input() itemsToDisplay = 6;
  @Input() getHeader!: Function;
  @Input() getLinks?: Function;
  @Input() moreButtonLabel = 'Show More';

  get displayItems(): TableData[] {
    return this.data.slice(0, this.itemsToDisplay);
  }

  get moreItemsToDisplay(): boolean {
    return this.itemsToDisplay < this.data.length;
  }

  getFields(item: TableData): string[] {
    return Object.keys(item);
  }

  getLabel(item: TableData, field: string): string {
    return item[field].label;
  }

  fieldIsText(item: TableData, field: string): boolean {
    return item[field].type === 'text';
  }

  goToLink(link: string): void {
    window.open(link, '_blank');
  }

  showMore(): void {
    this.itemsToDisplay = this.itemsToDisplay + this.itemsToDisplayIncrement;
  }
}
