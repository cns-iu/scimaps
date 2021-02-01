import { Component, HostBinding, Input } from '@angular/core';
import { IconLink, TableData, TableField } from '../../../core/models/table-data';
import { TableHeader } from '../../../core/models/table-header';

@Component({
  selector: 'sci-lazy-table',
  templateUrl: './lazy-table.component.html',
  styleUrls: ['./lazy-table.component.scss']
})
export class LazyTableComponent {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-lazy-table';
  ITEMS_TO_SHOW_DEFAULT = 5;

  @Input() data!: TableData[];
  @Input() initialItemsToShow = this.ITEMS_TO_SHOW_DEFAULT;
  @Input() showMoreItemsIncrement = 0;
  @Input() headers!: TableHeader[];
  @Input() sort!: string;
  @Input() sortDirection: 'ascending' | 'descending' = 'ascending';
  @Input() moreButtonLabel = 'Show More';
  @Input() lessButtonLabel = 'Show Less';
  @Input() caption!: string;

  itemsToShow = this.initialItemsToShow;

  get sortedData(): TableData[] {
    const currentData = this.data;
    let weight = 0;
    const sortedData = currentData.sort((dataOne: TableData, dataTwo: TableData) => {
      const a = dataOne[this.sort] as TableField;
      const b = dataTwo[this.sort] as TableField;
      if (a.type === 'icons' && a.links && b.links) {
        weight = a.links.length > b.links.length ? 1 : -1;
      } else if (a.type === 'date') {
        const dateA = new Date(a.label);
        const dateB = new Date(b.label);
        weight = dateA.getTime() > dateB.getTime() ? 1 : -1;
      } else {
        weight = a.label > b.label ? 1 : -1;
      }

      return this.sortDirection === 'ascending' ? weight : weight * -1;
    });
    return sortedData.slice(0, this.itemsToShow);
  }

  get showButtonLabel(): string {
    if (this.itemsToShow < this.data.length) {
      return this.moreButtonLabel;
    }

    return this.lessButtonLabel;
  }

  get recordCountLabel(): string {
    return `${this.sortedData.length} of ${this.data.length}`;
  }

  get needShowButton(): boolean {
    return this.initialItemsToShow < this.data.length;
  }

  getLabel(row: TableData, key: string): string  {
    console.log('row: ', row, '\nkey: ', key);
    return row[key].label;
  }

  getLinks(row: TableData, field: string): IconLink[] {
    const item = row[field];
    if (item.links) {
      return item.links;
    }

    return [];
  }

  goToLink(link: string): void {
    window.open(link, '_blank');
  }

  changeSortBy(key: string): void {
    if (this.sort === key) {
      this.sortDirection = this.sortDirection === 'ascending' ? 'descending' : 'ascending';
    } else {
      this.sortDirection = 'ascending';
      this.sort = key;
    }
  }

  handleShowButton(): void {
    if (this.itemsToShow < this.data.length) {
      this.showMoreItems();
    } else {
      this.showLessItems();
    }
  }

  showMoreItems(): void {
    if (this.showMoreItemsIncrement === 0) {
      this.itemsToShow = this.data.length;
    } else {
      this.itemsToShow = this.itemsToShow + this.showMoreItemsIncrement;
    }
  }

  showLessItems(): void {
    this.itemsToShow = this.initialItemsToShow;
  }

  getSortIcon(key: string): string {
    if (this.sort === key && this.sortDirection === 'descending') {
      return 'arrow_drop_up';
    }
    return 'arrow_drop_down';
  }
}
