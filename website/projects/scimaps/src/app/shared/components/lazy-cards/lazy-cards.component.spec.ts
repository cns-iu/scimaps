import { Shallow } from 'shallow-render';
import { Venue } from '../../../core/models/venue';

import { LazyCardsComponent } from './lazy-cards.component';
import { LazyCardsModule } from './lazy-cards.module';

function getVenues(count: number): Venue[] {
  const venues: Venue[] = [];
  const sampleVenue: Venue = {
    startDate: '9/2/2020',
    endDate: '9/30/2020',
    event: 'Technology Petting Zoo',
    location: 'Indiana University UITS, Bloomington, IN',
    contact: 'Jeannette Lehr',
    media: [
      {
        icon: 'photo',
        url: 'www.google.com'
      },
      {
        icon: 'video',
        url: 'www.google.com'
      }
    ]
  };

  for (let i = 0; i < count; i++) {
    venues.push(sampleVenue);
  }

  return venues;
}

describe('LazyCardsComponent', () => {
  let shallow: Shallow<LazyCardsComponent>;

  beforeEach(() => {
    shallow = new Shallow(LazyCardsComponent, LazyCardsModule);
  });

  it('displayItems should be the same length as itemsToDisplay when there are >= number of items', async () => {
    const data = getVenues(3);
    const { instance } = await shallow.render({ bind: { data }});
    instance.itemsToDisplay = 2;
    expect(instance.displayItems.length).toEqual(instance.itemsToDisplay);
  });

  it('moreItemsToDisplay should be true when there are more items than itemsToDisplay', async () => {
    const data = getVenues(4);
    const { instance } = await shallow.render({ bind: { data }});
    instance.itemsToDisplay = 3;
    expect(instance.moreItemsToDisplay).toBeTrue();
  });

  it('moreItemsToDisplay should be false when there are not more items than itemsToDisplay', async () => {
    const data = getVenues(2);
    const { instance } = await shallow.render({ bind: { data }});
    instance.itemsToDisplay = 2;
    expect(instance.moreItemsToDisplay).toBeFalse();
  });

  it('should call window.open with the correct link when goToLink is called', async () => {
    const data = getVenues(1);
    const { instance } = await shallow.render({ bind: { data }});
    const spy = spyOn(window, 'open');
    instance.goToLink('www.test.com');
    expect(spy).toHaveBeenCalledWith('www.test.com', '_blank');
  });

  it('should incrememnet itemsToDisplay by ITEMS_TO_DISPLAY_INCREMEMENT when showMore is called', async () => {
    const data = getVenues(1);
    const { instance } = await shallow.render({ bind: { data }});
    const before = instance.itemsToDisplay;
    instance.showMore();
    const after = instance.itemsToDisplay;
    expect(after).toEqual(before + instance.itemsToDisplayIncrement);
  });
});
