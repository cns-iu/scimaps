import { Shallow } from 'shallow-render';

import { TableHeader } from '../../../core/models/table-header';
import { Venue } from '../../../core/models/venue';
import { LazyTableComponent } from './lazy-table.component';
import { LazyTableModule } from './lazy-table.module';

interface SampleData {
  id: number;
  date: string;
  name: string;
  history: number[];
}

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
  ] as TableHeader[]
}


function getSortedSampleData(): SampleData[] {
  const alphabet = [ 'a', 'b', 'c', 'd', 'e',
                   'f', 'g', 'h', 'i', 'j',
                   'k', 'l', 'm', 'n', 'o',
                   'p', 'q', 'r', 's', 't',
                   'u', 'v', 'w', 'x', 'y',
                   'z' ];
  let data: SampleData[] = []
  let history: any = [];

  for (let dataIndex = 0; dataIndex <= 25; dataIndex++) {
    data.push({
      id: dataIndex,
      date: `01/${dataIndex}/2020`,
      name: alphabet[dataIndex],
      history
    });

    history.push(dataIndex);
  }

  return data;
};

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array: Array<any>) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
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
});
