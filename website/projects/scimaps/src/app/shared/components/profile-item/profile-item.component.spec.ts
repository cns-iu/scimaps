import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileItemComponent } from './profile-item.component';

import { Shallow } from 'shallow-render';
import { Profile } from '../../../core/models/profile';
import { ProfileItemModule } from './profile-item.module';

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

describe('ProfileItemComponent', () => {
  let shallow: Shallow<ProfileItemComponent>;

  function itHasElementWithContent(selector: string, content: string, compact = true, profiles = 1): void {
    it(`has the correct content for ${selector}`, async () => {
      const { find } = await shallow
        .render({ bind: { compact, profile: testProfile }});
      const el = find(selector)[0].nativeElement as Element;
      expect(el.innerHTML).toContain(content);
    });
  }

  beforeEach(async () => {
    shallow = new Shallow(ProfileItemComponent, ProfileItemModule);
  });

  itHasElementWithContent('.profile-name', testProfile.name);
  itHasElementWithContent('.profile-title', testProfile.title);
  itHasElementWithContent('.profile-affiliation', testProfile.affiliation, true);
  itHasElementWithContent('.profile-body', testProfile.body, false);

  it('should create the correct image source', async () => {
    const { find } = await shallow.render({ bind: { profile: testProfile }});
    const profileImage = find('.profile-image');
    const link = profileImage.nativeNode.alt;
    expect(link).toEqual(testProfile.image);
    });
  });


describe('ProfileItemComponent', () => {
  let component: ProfileItemComponent;
  let fixture: ComponentFixture<ProfileItemComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileItemModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileItemComponent);
    component = fixture.componentInstance;
    component.profile = testProfile;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



