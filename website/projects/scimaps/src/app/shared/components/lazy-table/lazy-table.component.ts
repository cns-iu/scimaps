import { Component, HostBinding, Input } from '@angular/core';
import { TableHeader } from '../../../core/models/table-header';
import { Venue } from '../../../core/models/venue';

@Component({
  selector: 'sci-lazy-table',
  templateUrl: './lazy-table.component.html',
  styleUrls: ['./lazy-table.component.scss']
})
export class LazyTableComponent {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-lazy-table';
  ITEMS_TO_SHOW_DEFAULT = 5;

  @Input() data!: any;
  @Input() initialItemsToShow = this.ITEMS_TO_SHOW_DEFAULT;
  @Input() showMoreItemsIncrement = 0;
  @Input() headers!: TableHeader[];
  @Input() sort!: string;
  @Input() sortDirection: 'ascending' | 'descending' = 'ascending';
  @Input() moreButtonLabel = 'Show More';

  itemsToShow = this.ITEMS_TO_SHOW_DEFAULT;

  get sortedData(): any {
    const currentData = this.data;
    let weight = 0;
    const sortedData = currentData.sort((a: any, b: any) => {
      a = a[this.sort];
      b = b[this.sort];
      if (Array.isArray(a[this.sort])) {
        weight = a[this.sort].length > b[this.sort].length ? 1 : -1;
      } else if (this.is_date(a)) {
        const dateA = new Date(a);
        const dateB = new Date(b);
        weight = dateA.getTime() > dateB.getTime() ? 1 : -1;
      } else {
        weight = a[this.sort] > b[this.sort] ? 1 : -1;
      }

      return this.sortDirection === 'ascending' ? weight : weight*-1;
    });
    return sortedData.slice(0, this.itemsToShow);
  }

  getDataField(row: any, key: string): any {
    return row[key];
  }

  goToLink(link: string): void {
    window.open(link, '_blank');
  }

  changeSortBy(key: string): void {
    console.log('this.sort: ', this.sort, '\nkey: ', key);
    if (this.sort === key) {
      this.sortDirection = this.sortDirection === 'ascending' ? 'descending' : 'ascending';
      console.log('CHANGE SORT DIRECTION TO: ', this.sortDirection);
    } else {
      console.log('CHANGE SORT TO: ', key);
      this.sortDirection = 'ascending';
      this.sort = key;
    }
  }

  is_date(input: string): boolean {
    const regex = new RegExp(/([0-9]{1,2}[/.-]{1}[0-9]{1,2}[/.-]{1}[0-9]{2,4})/);
    if (regex.test(input)) {
      console.log('DATE');
      return true;
    }
    console.log('NOT A DATE');
    return false;
  }

  increaseItemsToShow(): void {
    if (this.showMoreItemsIncrement === 0) {
      this.itemsToShow = this.data.length;
    }

    else this.itemsToShow = this.itemsToShow + this.showMoreItemsIncrement;
  }

  getSortIcon(key: string): string {
    if (this.sort === key && this.sortDirection === 'descending') {
      return 'arrow_drop_up'
    }
    return 'arrow_drop_down'
  }
}
