import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Shallow } from 'shallow-render';
import { Router } from '@angular/router';
import { DiscoverItem } from '../../../core/models/discover-item';
import { DiscoverListingComponent } from './discover-listing.component';
import { DiscoverListingModule } from './discover-listing.module';


const discoverItem: DiscoverItem = {
  title: 'XV: macroscopes for Tracking the Flow of Resources (2019)',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non dui euismod mauris faucibus euismod non lacinia quam. Morbi sit amet placerat dui. Sed ut dolor efficitur, consequat augue sed, pharetra orci. Nulla vitae mauris nisi. Aenean orci ipsum, scelerisque et arcu quis, molestie efficitur dui. Curabitur enim lacus, vehicula at arcu id, sagittis posuere est. Maecenas laoreet est eget tristique interdum. Fusce consequat, nisl ac bibendum facilisis, tellus nulla blandit orci, quis dignissim est mi ac justo.',
  thumbnails: [
    {
      title: 'Refugee Flow',
      link: 'www.google.com',
      image: 'image1.png'
    },
    {
      title: 'Politoscope',
      link: 'www.google.com',
      image: 'image2.png'
    },
    {
      title: 'Income Disparity',
      link: 'www.google.com',
      image: 'image3.png'
    },
    {
      title: 'Making Sense of Skills',
      link: 'www.google.com',
      image: 'image4.png'
    }
  ],
  slug: 'macroscopes-2019',
  directory: 'macroscopes',
  iteration: 1
};

const type = 'macroscopes';

describe('DiscoverListingComponent', () => {
  let shallow: Shallow<DiscoverListingComponent>;
  const mockMatDialog = {
    open(...args: unknown[]): MatDialogRef<unknown, unknown> {
      return undefined as unknown as MatDialogRef<unknown, unknown>;
    }
  };

  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async () => {
    shallow = new Shallow(DiscoverListingComponent, DiscoverListingModule)
      .mock(Router, mockRouter);
  });

  it('should create the correct image source', async () => {
    const { instance } = await shallow.render({ bind: { discoverItem, type }});
    const imageSource = instance.imageSource('image1.png');
    expect(imageSource).toEqual('assets/macroscopes/macroscopes-2019/image1.png');
  });

  it('should navigate when the desktop click handler is called', async () => {
    const { instance } = await shallow.render({ bind: { discoverItem, type }});
    instance.desktopThumbnailClickHandler('a/b/c');
    expect(mockRouter.navigate).toHaveBeenCalledWith( [ '/', 'a', 'b', 'c' ], {state: { direction: 'forward'}} );
  });

  it('should launch the modal when the mobile click handler is called', async () => {
    const { instance, get } = await shallow.mock(MatDialog, mockMatDialog).render({ bind: { discoverItem, type }});
    instance.mobileThumbnailClickHandler('www.google.com');
    expect(get(MatDialog).open).toHaveBeenCalled();
  });
});
