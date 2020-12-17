import { Shallow } from 'shallow-render';
import { ImageCardItem } from '../../../core/models/image-card-item';

import { CardGalleryComponent } from './card-gallery.component';
import { CardGalleryModule } from './card-gallery.module';

const cards: ImageCardItem[] = [
  {
    title: 'title 1',
    body: 'body 1',
    slug: 'slug-1'
  },
  {
    title: 'title 2',
    body: 'body 2',
    slug: 'slug-2'
  }
];

describe('CardGalleryComponent', () => {
  let shallow: Shallow<CardGalleryComponent>;

  beforeEach(async () => {
    shallow = new Shallow(CardGalleryComponent, CardGalleryModule);
  });

  it('should create the correct image source using the slug provided', async () => {
    const { instance } = await shallow.render({ bind: { cards, directory: 'test' }});
    const imageSource = instance.getImageSource('test-slug');
    expect(imageSource).toEqual('assets/test/test-slug/image.png');
  });

  it('should emit when a card is clicked', async () => {
    const { instance, outputs } = await shallow.render({ bind: { cards, directory: 'test' }});
    instance.handleClick(cards[0]);
    expect(outputs.cardClicked.emit).toHaveBeenCalled();
  });

  it('should create the a desktop card for each of the image card items passed in', async () => {
    const { find } = await shallow.render({ bind: { cards, directory: 'test' }});
    const cardElements = find('.desktop-card');
    expect(cardElements.length).toEqual(cards.length);
  });

  it('should create the a mobile card for each of the image card items passed in', async () => {
    const { find } = await shallow.render({ bind: { cards, directory: 'test' }});
    const cardElements = find('.mobile-card');
    expect(cardElements.length).toEqual(cards.length);
  });

  it('should add a title to the gallery when one is passed in', async () => {
    const { find } = await shallow.render({ bind: { cards, directory: 'test', galleryTitle: 'test title'}});
    const title = find('.title').nativeElement;
    expect(title.innerHTML).toEqual('test title');
  });
});
