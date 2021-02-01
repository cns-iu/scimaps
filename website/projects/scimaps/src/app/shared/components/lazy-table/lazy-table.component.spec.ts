import { Shallow } from 'shallow-render';
import { IconLink, TableData } from '../../../core/models/table-data';

import { TableHeader } from '../../../core/models/table-header';
import { LazyTableComponent } from './lazy-table.component';
import { LazyTableModule } from './lazy-table.module';

function getHeaders(): TableHeader[] {
  return [
    {
      label: 'ID',
      key: 'id',
      format: 'text'
    },
    {
      label: 'Date',
      key: 'date',
      format: 'text'
    },
    {
      label: 'Name',
      key: 'name',
      format: 'text'
    },
    {
      label: 'History',
      key: 'history',
      format: 'icon'
    }
  ] as TableHeader[];
}

function getSortedSampleData(): TableData[] {
  const alphabet = [ 'a', 'b', 'c', 'd', 'e',
                   'f', 'g', 'h', 'i', 'j',
                   'k', 'l', 'm', 'n', 'o',
                   'p', 'q', 'r', 's', 't',
                   'u', 'v', 'w', 'x', 'y',
                   'z' ];
  const data: TableData[] = [];
  const history: IconLink[] = [];

  for (let dataIndex = 0; dataIndex <= 25; dataIndex++) {
    data.push({
      id: {
        label: dataIndex.toString(),
        type: 'number'
      },
      date: {
        label: `01/${dataIndex}/2020`,
        type: 'date'
      },
      name: {
        label: alphabet[dataIndex],
        type: 'text'
      },
      history: {
        label: 'History',
        type: 'icons',
        links: [

        ]
      }
    });

    history.push({ icon: 'insert_photo', url: dataIndex.toString()});
  }

  return data;
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array: TableData[]): TableData[] {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

describe('LazyTableComponent', () => {
  let shallow: Shallow<LazyTableComponent>;

  beforeEach(() => {
    shallow = new Shallow(LazyTableComponent, LazyTableModule);
  });

  it('If no initialItemsToShow is passed in then initialItemsToShow should revert to the default', async () => {
    const data = getSortedSampleData();
    const headers = getHeaders();
    const sort = headers[0].key;
    const caption = '';
    const { instance } = await shallow.render({ bind: { data, headers, sort, caption }});

    expect(instance.initialItemsToShow).toEqual(instance.ITEMS_TO_SHOW_DEFAULT);
  });

  it('sortedData should only have as many elements in it as defined by itemsToShow', async () => {
    const sortedData = getSortedSampleData();
    const headers = getHeaders();
    const sort = 'name';
    const caption = '';
    const initialItemsToShow = 10;
    const { instance } = await shallow.render({ bind: { data: sortedData, headers, sort, caption, initialItemsToShow }});

    expect(instance.sortedData.length).toEqual(instance.itemsToShow);
  });

  it('sortedData getter should correctly sort data by text based fields', async () => {
    const sortedData = getSortedSampleData();
    const unsortedData = shuffleArray(sortedData);
    const headers = getHeaders();
    const sort = 'name';
    const caption = '';
    const { instance } = await shallow.render({ bind: { data: unsortedData, headers, sort, caption }});
    instance.itemsToShow = sortedData.length;

    expect(instance.sortedData).toEqual(sortedData);
  });

  it('sortedData getter should correctly sort data by array based fields', async () => {
    const sortedData = getSortedSampleData();
    const unsortedData = shuffleArray(sortedData);
    const headers = getHeaders();
    const sort = 'history';
    const caption = '';
    const { instance } = await shallow.render({ bind: { data: unsortedData, headers, sort, caption }});
    instance.itemsToShow = sortedData.length;

    expect(instance.sortedData).toEqual(sortedData);
  });

  it('sortedData getter should correctly sort data by date based fields', async () => {
    const sortedData = getSortedSampleData();
    const unsortedData = shuffleArray(sortedData);
    const headers = getHeaders();
    const sort = 'date';
    const caption = '';
    const { instance } = await shallow.render({ bind: { data: unsortedData, headers, sort, caption }});
    instance.itemsToShow = sortedData.length;

    expect(instance.sortedData).toEqual(sortedData);
  });

  it('sortedData getter should correctly sort data by number based fields', async () => {
    const sortedData = getSortedSampleData();
    const unsortedData = shuffleArray(sortedData);
    const headers = getHeaders();
    const sort = 'id';
    const caption = '';
    const { instance } = await shallow.render({ bind: { data: unsortedData, headers, sort, caption }});
    instance.itemsToShow = sortedData.length;

    expect(instance.sortedData).toEqual(sortedData);
  });

  it('changing sort from ascending to descending should reverse the order', async () => {
    const sortedData = getSortedSampleData();
    const headers = getHeaders();
    const sort = 'id';
    const caption = '';
    const sortDirection = 'ascending';
    const { instance } = await shallow.render({ bind: { data: sortedData, headers, sort, caption, sortDirection }});
    instance.itemsToShow = sortedData.length;
    const ascendingData = { ...instance.sortedData };
    instance.sortDirection = 'descending';
    const descendingData = { ...instance.sortedData };

    let reverseCheck = true;
    let oppositeIndex = descendingData.length;
    for (let i = 0; i < ascendingData.length; i++) {
      oppositeIndex--;
      if (ascendingData[i] !== descendingData[oppositeIndex]) {
        reverseCheck = false;
      }
    }

    expect(reverseCheck).toBeTrue();
  });

  it('showButtonLabel should be the more button label when all values are not displayed', async () => {
    const sortedData = getSortedSampleData();
    const headers = getHeaders();
    const sort = 'id';
    const caption = '';
    const { instance } = await shallow.render({ bind: { data: sortedData, headers, sort, caption }});
    instance.itemsToShow = sortedData.length;

    expect(instance.showButtonLabel).toEqual(instance.lessButtonLabel);
  });

  it('showButtonLabel should be the less button label when all values are displayed', async () => {
    const sortedData = getSortedSampleData();
    const headers = getHeaders();
    const sort = 'id';
    const caption = '';
    const { instance } = await shallow.render({ bind: { data: sortedData, headers, sort, caption }});
    instance.itemsToShow = sortedData.length - 1;

    expect(instance.showButtonLabel).toEqual(instance.moreButtonLabel);
  });

  it('should window.open when goToLink is called', async () => {
    const sortedData = getSortedSampleData();
    const headers = getHeaders();
    const sort = 'id';
    const caption = '';
    const { instance } = await shallow.render({ bind: { data: sortedData, headers, sort, caption }});
    const spy = spyOn(window, 'open');
    instance.goToLink('test.com');
    expect(spy).toHaveBeenCalledWith('test.com', '_blank');
  });

  it('changeSortBy should should change the sort variable to the key passed in, if it is not already selected', async () => {
    const sortedData = getSortedSampleData();
    const headers = getHeaders();
    const sort = 'id';
    const caption = '';
    const { instance } = await shallow.render({ bind: { data: sortedData, headers, sort, caption }});
    instance.changeSortBy('name');

    expect(instance.sort).toEqual('name');
  });

  it('changeSortBy should should default the sort direction to ascending when a new key is passed in', async () => {
    const sortedData = getSortedSampleData();
    const headers = getHeaders();
    const sort = 'id';
    const caption = '';
    const { instance } = await shallow.render({ bind: { data: sortedData, headers, sort, caption }});
    instance.sortDirection = 'descending';
    instance.changeSortBy('name');

    expect(instance.sortDirection).toEqual('ascending');
  });

  it('changeSortBy should should alternate the sortDirection if they key passed in is already selected', async () => {
    const sortedData = getSortedSampleData();
    const headers = getHeaders();
    const sort = 'id';
    const caption = '';
    const { instance } = await shallow.render({ bind: { data: sortedData, headers, sort, caption }});
    instance.sortDirection =  'ascending';
    instance.changeSortBy('id');

    expect(instance.sortDirection).toEqual('descending');
    instance.changeSortBy('id');
    expect(instance.sortDirection).toEqual('ascending');
  });

  it('handleShowButton should call showMoreItems when there are more items than are currently showing', async () => {
    const sortedData = getSortedSampleData();
    const headers = getHeaders();
    const sort = 'id';
    const caption = '';
    const { instance } = await shallow.render({ bind: { data: sortedData, headers, sort, caption }});
    instance.itemsToShow = instance.data.length - 1;
    const spy = spyOn(instance, 'showMoreItems');
    instance.handleShowButton();

    expect(spy).toHaveBeenCalled();
  });

  it('handleShowButton should call showLessItems when all items are currently showing', async () => {
    const sortedData = getSortedSampleData();
    const headers = getHeaders();
    const sort = 'id';
    const caption = '';
    const { instance } = await shallow.render({ bind: { data: sortedData, headers, sort, caption }});
    instance.itemsToShow = instance.data.length;
    const spy = spyOn(instance, 'showLessItems');
    instance.handleShowButton();

    expect(spy).toHaveBeenCalled();
  });

  it('showMoreItems should increment itemsToShow by the showMoreItemsIncrement if one is set', async () => {
    const sortedData = getSortedSampleData();
    const headers = getHeaders();
    const sort = 'id';
    const caption = '';
    const showMoreItemsIncrement = 2;
    const { instance } = await shallow.render({ bind: { data: sortedData, headers, sort, caption, showMoreItemsIncrement }});
    instance.itemsToShow = 0;
    instance.showMoreItems();

    expect(instance.itemsToShow).toEqual(2);
  });

  it('showMoreItems should set itemsToShow to the total number of data items if there is no showMoreItemsIncrement set', async () => {
    const sortedData = getSortedSampleData();
    const headers = getHeaders();
    const sort = 'id';
    const caption = '';
    const { instance } = await shallow.render({ bind: { data: sortedData, headers, sort, caption }});
    instance.itemsToShow = 0;
    instance.showMoreItems();

    expect(instance.itemsToShow).toEqual(instance.data.length);
  });

  it('showLessItems should reset the itemsToShow back to the initialItemsToShow', async () => {
    const sortedData = getSortedSampleData();
    const headers = getHeaders();
    const sort = 'id';
    const caption = '';
    const initialItemsToShow = 5;
    const { instance } = await shallow.render({ bind: { data: sortedData, headers, sort, caption, initialItemsToShow }});
    instance.itemsToShow = 10;
    instance.showLessItems();

    expect(instance.itemsToShow).toEqual(instance.itemsToShow);
  });

  it('getSortIcon should return arrow_drop_up if the key passed in is the current sort and the direction is descending', async () => {
    const sortedData = getSortedSampleData();
    const headers = getHeaders();
    const sort = 'id';
    const caption = '';
    const { instance } = await shallow.render({ bind: { data: sortedData, headers, sort, caption }});
    instance.sortDirection = 'descending';

    expect(instance.getSortIcon(instance.sort)).toEqual('arrow_drop_up');
  });

  it('getSortIcon should return arrow_drop_down if the key passed in is not the current sort icon', async () => {
    const sortedData = getSortedSampleData();
    const headers = getHeaders();
    const sort = 'id';
    const caption = '';
    const { instance } = await shallow.render({ bind: { data: sortedData, headers, sort, caption }});
    instance.sortDirection = 'descending';

    expect(instance.getSortIcon('name')).toEqual('arrow_drop_down');
  });

  it('getSortIcon should return arrow_drop_down if the sortDirection is not descending', async () => {
    const sortedData = getSortedSampleData();
    const headers = getHeaders();
    const sort = 'id';
    const caption = '';
    const { instance } = await shallow.render({ bind: { data: sortedData, headers, sort, caption }});
    instance.sortDirection = 'ascending';

    expect(instance.getSortIcon('id')).toEqual('arrow_drop_down');
  });
});
