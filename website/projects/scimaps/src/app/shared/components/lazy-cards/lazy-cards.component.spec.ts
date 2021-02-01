import { Shallow } from 'shallow-render';
import { TableData } from '../../../core/models/table-data';

import { LazyCardsComponent } from './lazy-cards.component';
import { LazyCardsModule } from './lazy-cards.module';

function getTableData(count: number): TableData[] {
  const data: TableData[] = [];
  const sampleData: TableData = {
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
  };

  for (let i = 0; i < count; i++) {
    data.push(sampleData);
  }

  return data;
}

describe('LazyCardsComponent', () => {
  let shallow: Shallow<LazyCardsComponent>;

  beforeEach(() => {
    shallow = new Shallow(LazyCardsComponent, LazyCardsModule);
  });

  it('displayItems should be the same length as itemsToDisplay when there are >= number of items', async () => {
    const data = getTableData(3);
    const { instance } = await shallow.render({ bind: { data } });
    instance.itemsToDisplay = 2;
    expect(instance.displayItems.length).toEqual(instance.itemsToDisplay);
  });

  it('moreItemsToDisplay should be true when there are more items than itemsToDisplay', async () => {
    const data = getTableData(4);
    const { instance } = await shallow.render({ bind: { data } });
    instance.itemsToDisplay = 3;
    expect(instance.moreItemsToDisplay).toBeTrue();
  });

  it('moreItemsToDisplay should be false when there are not more items than itemsToDisplay', async () => {
    const data = getTableData(2);
    const { instance } = await shallow.render({ bind: { data } });
    instance.itemsToDisplay = 2;
    expect(instance.moreItemsToDisplay).toBeFalse();
  });

  it('should call window.open with the correct link when goToLink is called', async () => {
    const data = getTableData(1);
    const { instance } = await shallow.render({ bind: { data } });
    const spy = spyOn(window, 'open');
    instance.goToLink('www.test.com');
    expect(spy).toHaveBeenCalledWith('www.test.com', '_blank');
  });

  it('should incrememnet itemsToDisplay by ITEMS_TO_DISPLAY_INCREMEMENT when showMore is called', async () => {
    const data = getTableData(1);
    const { instance } = await shallow.render({ bind: { data } });
    const before = instance.itemsToDisplay;
    instance.showMore();
    const after = instance.itemsToDisplay;
    expect(after).toEqual(before + instance.itemsToDisplayIncrement);
  });
});
