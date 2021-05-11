import { TestBed } from '@angular/core/testing';
import { AboutResolverService } from './about-resolver.service';
import { Profile } from '../../core/models/profile';
import { getProfiles } from './about.component.spec';
import { ContentService, toSlug } from '../../shared/services/content.service';
import { Params } from '@angular/router';
import { of } from 'rxjs';

describe('AboutResolverService', () => {
  let service: AboutResolverService;
  let contentService: Params;
  const testProfile: Profile[] = getProfiles(10);
  const directory = 'content/person';
  const testItem = {
    name: 'Achim Oberg',
    jobTitle: 'jobtitle',
    homepage: 'homepage',
    body: 'body',
    affiliation: 'affiliation',
    image: 'image.png'
  };
  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', ['getIndex']);
    TestBed.configureTestingModule({
      providers: [
        AboutResolverService,
        {provide: ContentService, useValue: contentServiceSpy}
      ]
    });
    service = TestBed.inject(AboutResolverService);
    contentService = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should give correct relative image path', () => {
    const profile = testProfile[0];
    const newImagePath = service.getImageSource(profile);
    expect(newImagePath).toEqual(`assets/${directory}/${profile.slug}/${profile.image}`);
  });

  it('should should call contentService.getIndex once', () => {
    (contentService.getIndex as jasmine.Spy).and.returnValue(
      of([testItem])
    );
    service.resolve();
    expect(contentService.getIndex).toHaveBeenCalledTimes(1);
    expect(contentService.getIndex).toHaveBeenCalledWith('people');
  });

  it('should map data correctly', async (done) => {
    (contentService.getIndex as jasmine.Spy).and.returnValue(
      of([testItem])
    );
    const result = service.resolve();
    result.subscribe((profiles: Profile[]) => {
      const profile = profiles[0];
      expect(profile.name).toEqual(testItem.name);
      expect(profile.body).toEqual(testItem.body);
      expect(profile.affiliation).toEqual(testItem.affiliation);
      expect(profile.link).toEqual(testItem.homepage);
      expect(profile.slug).toEqual(toSlug(testItem.name));
      expect(profile.image).toEqual(`assets/${directory}/${profile.slug}/${testItem.image}`);
      done();
    });
  });
});
