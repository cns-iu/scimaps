import { TestBed } from '@angular/core/testing';
import { AboutResolverService } from './about-resolver.service';
import { Profile } from '../../core/models/profile';
import { getProfiles } from './about.component.spec';
import { ContentService } from '../../shared/services/content.service';

describe('AboutResolverService', () => {
  let service: AboutResolverService;
  let contentServiceSpy: ContentService;
  const testProfile: Profile[] = getProfiles(10);

  beforeEach(() => {
    contentServiceSpy = jasmine.createSpyObj(ContentService, ['getIndex']);
    TestBed.configureTestingModule({
      providers: [
        AboutResolverService,
        {provide: ContentService, useValue: contentServiceSpy}
      ]
    });
    service = TestBed.inject(AboutResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should give correct relative image path', () => {
    const profile = testProfile[0];
    const directory = 'content/person';
    const newImagePath = service.getImageSource(profile);
    expect(newImagePath).toEqual(`assets/${directory}/${profile.slug}/${profile.image}`);
  });
});
