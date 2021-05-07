import { Shallow } from 'shallow-render';
import { Profile } from '../../../core/models/profile';

import { ProfileGalleryComponent } from './profile-gallery.component';
import { ProfileGalleryModule } from './profile-gallery.module';

const testProfile: Profile =     {
  name: 'Name Surname',
  title: 'Job Title',
  affiliation: 'Affiliation',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum, massa nec elementum convallis, ligula mi placerat ipsum, et volutpat ante orci ultricies odio. Duis.',
  link: 'www.google.com',
  slug: 'name-surname',
  image: 'image.jpg'
};

function getProfiles(numberOfProfiles: number): Profile[] {
  const profiles: Profile[] = [];
  for (let i = 0; i <= numberOfProfiles; i++) {
    profiles.push(testProfile);
  }
  return profiles;
}

const directory = 'test-directory';
const title = 'test-title';
const description = 'test-description';

describe('ProfileGalleryComponent', () => {
  let shallow: Shallow<ProfileGalleryComponent>;

  function itHasElementWithContent(selector: string, content: string, compact = true, profiles = 1): void {
    it(`has the correct content for ${selector}`, async () => {
      const { find } = await shallow
        .render({ bind: { compact, title, description, profiles: getProfiles(profiles), directory }});
      const el = find(selector)[0].nativeElement as Element;
      expect(el.innerHTML).toContain(content);
    });
  }

  beforeEach(async () => {
    shallow = new Shallow(ProfileGalleryComponent, ProfileGalleryModule);
  });

  itHasElementWithContent('.title', title);
  itHasElementWithContent('.description', description);
  itHasElementWithContent('.profile-name', testProfile.name);
  itHasElementWithContent('.profile-title', testProfile.title);
  itHasElementWithContent('.profile-affiliation', testProfile.affiliation, true);
  itHasElementWithContent('.profile-body', testProfile.body, false);

  it('should create the correct image source', async () => {
    const { instance } = await shallow.render({ bind: { profiles: getProfiles(1), directory }});
    const source = instance.getImageSource(instance.profiles[0]);
    expect(source).toEqual('assets/test-directory/name-surname/image.png');
  });

  it('should call the goToLink() method with the correct URL when a profile is clicked', async () => {
    const { instance, find } = await shallow.render({ bind: { profiles: getProfiles(1), directory }});
    const spy = spyOn(instance, 'goToLink');
    const profile = find('.profile')[0];
    profile.triggerEventHandler('click', {});
    expect(spy).toHaveBeenCalledWith(testProfile.link);
  });

  it('should call window.open when goToLink() is called', async () => {
    const { instance } = await shallow.render({ bind: { profiles: getProfiles(1), directory }});
    const spy = spyOn(window, 'open');
    instance.goToLink('www.google.com');
    expect(spy).toHaveBeenCalledWith('www.google.com', '_blank');
  });
});
