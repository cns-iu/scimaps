import { Shallow } from 'shallow-render';

import { CardLinkItem } from '../../../core/models/card-link-item';
import { CardLinkComponent } from './card-link.component';
import { CardLinkModule } from './card-link.module';

const testCardLink: CardLinkItem = {
  imageSource: 'assets/images/benches.jpg',
  label: 'Test Card',
  link: 'www.google.com'
};

describe('CardLinkComponent', () => {
  let shallow: Shallow<CardLinkComponent>;

  beforeEach(async () => {
    shallow = new Shallow(CardLinkComponent, CardLinkModule);
  });

  it('should window.open when goToLink is called', async () => {
    const { instance } = await shallow.render({ bind: { cardData: testCardLink }});
    const spy = spyOn(window, 'open');
    instance.goToLink();
    expect(spy).toHaveBeenCalledWith(testCardLink.link, '_blank');
  });

  it('should create the correct image URL', async () => {
    const { instance } = await shallow.render({ bind: { cardData: testCardLink }});
    const url = instance.imageUrl;
    expect(url).toEqual(`url('${testCardLink.imageSource}')`);
  });
});
