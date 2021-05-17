import { Shallow } from 'shallow-render';

import { AboutComponent } from './about.component';
import { AboutModule } from './about.module';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Profile } from '../../core/models/profile';

export function getProfiles(numberOfProfiles: number): Profile[] {
  const profiles: Profile[] = [];
  for (let i = 0; i <= numberOfProfiles; i++) {
    const roles = ['curator', 'advisory_board', 'ambassador'];
    const index = Math.floor(Math.random() * 3);
    profiles.push({
      affiliation: `IUB ${i}`,
      body: `Sample body ${i}`,
      image: `assets/content/person/abin-abraham/image${i}.jpg`,
      link: `https://www.google.com/${i}`,
      name: `Abin Abraham ${i}`,
      slug: `abin-abraham-${i}`,
      title: `Sample title ${i}`,
      roles: [ roles[index] ]
    });
  }
  return profiles;
}

describe('AboutComponent', () => {
  let shallow: Shallow<AboutComponent>;

  const testProfiles = getProfiles(30);
  const testBody = {
    curatorsDescription: 'Sample curators description',
    advisoryBoardDescription: 'Sample advisory board description',
    ambassadorsDescription: 'Sample sambassadors description'
  };

  beforeEach(() => {
    shallow = new Shallow(AboutComponent, AboutModule)
      .mock(ActivatedRoute, {
        data: of({
          profiles: testProfiles,
          body: {
            ...testBody
          }
        })
      });
  });

  it('should update activePageTab to the one passed in', async () => {
    const { instance } = await shallow.render();
    instance.activePageTab = 0;
    instance.updateActivePageTab(1);
    expect(instance.activePageTab).toEqual(1);
  });

  it('should update activePageTab to the one passed in', async () => {
    const { instance } = await shallow.render();
    instance.activePageTab = 1;
    instance.updateActivePageTab(0);
    expect(instance.activePageTab).toEqual(0);
  });

  it('should have correct curator description', async () => {
    const { instance } = await shallow.render();
    expect(instance.curatorsDescription).toEqual(testBody.curatorsDescription);
  });

  it('should have correct advisory board description', async () => {
    const { instance } = await shallow.render();
    expect(instance.advisoryBoardDescription).toEqual(testBody.advisoryBoardDescription);
  });

  it('should have correct ambassador description', async () => {
    const { instance } = await shallow.render();
    expect(instance.ambassadorsDescription).toEqual(testBody.ambassadorsDescription);
  });

  it('should have correct curator profiles', async () => {
    const { instance } = await shallow.render();
    const curatorProfiles = testProfiles.filter((profile: Profile) => {
      return profile.roles.includes('curator');
    });
    expect(instance.curatorProfiles).toEqual(curatorProfiles);
  });

  it('should have correct advisory board profiles', async () => {
    const { instance } = await shallow.render();
    const advisoryBoardProfiles = testProfiles.filter((profile: Profile) => {
      return profile.roles.includes('advisory_board');
    });
    expect(instance.advisoryBoardProfiles).toEqual(advisoryBoardProfiles);
  });

  it('should have correct ambassadors profiles', async () => {
    const { instance } = await shallow.render();
    const ambassadorProfiles = testProfiles.filter((profile: Profile) => {
      return profile.roles.includes('ambassador');
    });
    expect(instance.ambassadorProfiles).toEqual(ambassadorProfiles);
  });
});
