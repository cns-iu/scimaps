import { TestBed } from '@angular/core/testing';
import { AboutBodyResolverService } from './about-body-resolver.service';
import { ContentService } from '../../shared/services/content.service';

describe('AboutBodyResolverService', () => {
  let service: AboutBodyResolverService;
  let contentServiceSpy: ContentService;
  beforeEach(() => {
    contentServiceSpy = jasmine.createSpyObj(ContentService, ['getContent']);
    TestBed.configureTestingModule({
      providers: [
        AboutBodyResolverService,
        {provide: ContentService, useValue: contentServiceSpy}
      ]
    });
    service = TestBed.inject(AboutBodyResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
