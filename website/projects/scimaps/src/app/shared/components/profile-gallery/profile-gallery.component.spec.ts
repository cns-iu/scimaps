import { Shallow } from 'shallow-render';
import { Profile } from '../../../core/models/profile';

import { ProfileGalleryComponent } from './profile-gallery.component';
import { ProfileGalleryModule } from './profile-gallery.module';

const testProfile: Profile =     {
  name: 'Name Surname',
  title: 'Job Title',
  affiliation: 'Affiliation',
  body: 'Lorem ipsum dolor sit amet',
  link: 'www.google.com',
  slug: 'name-surname',
  image: 'image.jpg',
  roles: ['maker'],
  location_name: 'California',
  region: 'n_america'
};

function getProfiles(numberOfProfiles: number): Profile[] {
  const profiles: Profile[] = [];
  for (let i = 0; i <= numberOfProfiles; i++) {
    profiles.push(testProfile);
  }
  return profiles;
}

const title = 'test-title';
const description = 'test-description';

describe('ProfileGalleryComponent', () => {
  let shallow: Shallow<ProfileGalleryComponent>;

  function itHasElementWithContent(selector: string, content: string, compact = true, profiles = 1): void {
    it(`has the correct content for ${selector}`, async () => {
      const { find } = await shallow
        .render({ bind: { compact, title, description, profiles: getProfiles(profiles) }});
      const el = find(selector)[0].nativeElement as Element;
      expect(el.innerHTML).toContain(content);
    });
  }

  beforeEach(async () => {
    shallow = new Shallow(ProfileGalleryComponent, ProfileGalleryModule);
  });

  itHasElementWithContent('.title', title);

  it('should group profiles correctly', async () => {
    const { instance } = await shallow.render({ bind: { profiles: getProfiles(10), groupBy: 'region' }});
    expect(instance.profilesByGroup).toBeTruthy();
    expect(Object.keys(instance.profilesByGroup).length).toBeGreaterThanOrEqual(1);
  });
});
