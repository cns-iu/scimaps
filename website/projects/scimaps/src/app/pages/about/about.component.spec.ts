import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Shallow } from 'shallow-render';
import { Profile } from '../../core/models/profile';
import { AboutComponent } from './about.component';
import { AboutModule } from './about.module';


export function getProfiles(numberOfProfiles: number, roles = ['maker']): Profile[] {
  const profiles: Profile[] = [];
  for (let i = 0; i <= numberOfProfiles; i++) {
    profiles.push({
      affiliation: `IUB ${i}`,
      body: `Sample body ${i}`,
      image: `assets/content/person/abin-abraham/image${i}.jpg`,
      link: `https://www.google.com/${i}`,
      name: `Abin Abraham ${i}`,
      slug: `abin-abraham-${i}`,
      title: `Sample title ${i}`,
      roles
    });
  }
  return profiles;
}

const testNewsItems = [{
  title: 'Title 3',
  date: new Date(2005, 1, 1).toUTCString(),
  publication: 'C',
  institution: 'test institution',
  thumbnail: 'test thumb',
  pdfLink: 'link'
},
{
  title: 'Title 7',
  date: new Date(2006, 1, 1).toUTCString(),
  publication: 'G',
  institution: 'test institution',
  thumbnail: 'test thumb',
  pdfLink: 'link'
}];

const curatorProfiles = getProfiles(10, ['curator']);
const advisoryBoardProfiles = getProfiles(10, ['advisory_board']);
const ambassadorProfiles = getProfiles(10, ['ambassador']);
const testProfiles = [...curatorProfiles, ...advisoryBoardProfiles, ...ambassadorProfiles];
const testBody = {
  curatorsDescription: 'Sample curators description',
  advisoryBoardDescription: 'Sample advisory board description',
  ambassadorsDescription: 'Sample sambassadors description'
};

xdescribe('About', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    const route = { data: of({ }) };
    await TestBed.configureTestingModule({
      imports: [AboutModule],
      providers: [{ provide: ActivatedRoute, useValue: route }, ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});

describe('AboutComponent', () => {
  let shallow: Shallow<AboutComponent>;


  beforeEach(() => {
    shallow = new Shallow(AboutComponent, AboutModule)
      .mock(ActivatedRoute, {
        data: of({
          profiles: testProfiles,
          body: {
            ...testBody
          },
          newsItems: testNewsItems
        })
      });
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
    expect(instance.curatorProfiles).toEqual(curatorProfiles);
  });

  it('should have correct advisory board profiles', async () => {
    const { instance } = await shallow.render();
    expect(instance.advisoryBoardProfiles).toEqual(advisoryBoardProfiles);
  });

  it('should have correct ambassadors profiles', async () => {
    const { instance } = await shallow.render();
    expect(instance.ambassadorProfiles).toEqual(ambassadorProfiles);
  });

  it('should have correct ambassadors profiles', async () => {
    const { instance } = await shallow.render();
    expect(instance.newsItems).toEqual(testNewsItems);
  });

  it('should open correct annual report', async () => {
    const { instance } = await shallow.render();
    const spy = spyOn(window, 'open');
    const testLink = 'link';
    instance.getReport(testLink);
    expect(spy).toHaveBeenCalledWith(testLink, '_blank');
  });
});
