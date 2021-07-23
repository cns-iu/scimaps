import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { Params } from '@angular/router';
import { of } from 'rxjs';
import { ContentService } from '../../shared/services/content.service';
import { HostingBody, HostingBodyResolverService } from './hosting-body-resolver.service';

describe('HostingBodyResolverService', () => {
  let service: HostingBodyResolverService;
  let contentService: Params;
  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', ['getContent']);
    TestBed.configureTestingModule({
      providers: [
        HostingBodyResolverService,
        {provide: ContentService, useValue: contentServiceSpy}
      ]
    });
    service = TestBed.inject(HostingBodyResolverService);
    contentService = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('should call contentService.getContent once', fakeAsync(() => {
    const actualResponse = {
      tabs: [{header: 'tab1 header', image: 'tab1 image', content: 'tab1 content'}],
      overview: 'Hosting overview',
      carousel: [{sm: 'small.sm.jpg', lg: 'large.lg.jpg'}],
      install_guide: 'install_guide',
      master_booklet: 'master_booklet'
    };
    (contentService.getContent as jasmine.Spy).and.returnValue(
      of(actualResponse)
    );

    const data = service.resolve();
    flushMicrotasks();
    expect(contentService.getContent).toHaveBeenCalledTimes(1);
    expect(contentService.getContent).toHaveBeenCalledWith(service.mdPath);
    data.subscribe((response) => {
      expect(response.overview).toEqual(actualResponse.overview);
      expect(response.install_guide).toEqual(actualResponse.install_guide);
      expect(response.master_booklet).toEqual(actualResponse.master_booklet);
    });
  }));

  it('should update paths correctly', () => {
    const actualResponse: HostingBody = {
      tabs: [{header: 'tab1 header', image: 'tab1.jpg', content: 'tab1 content'}],
      overview: 'Hosting overview',
      carousel: [{sm: 'small.sm.jpg', lg: 'large.lg.jpg'}],
      install_guide: 'install_guide',
      master_booklet: 'master_booklet'
    };
    const result = service.updatePaths(JSON.parse(JSON.stringify(actualResponse)));

    expect(result.tabs).not.toEqual(actualResponse.tabs);
    expect(result.carousel).not.toEqual(actualResponse.carousel);
    expect(result.install_guide).not.toEqual(actualResponse.install_guide);
    expect(result.master_booklet).not.toEqual(actualResponse.master_booklet);
  });

  it('should not update http paths', () => {
    const actualResponse: HostingBody = {
      tabs: [{header: 'tab1 header', image: 'http://tab1image', content: 'tab1 content'}],
      overview: 'Hosting overview',
      carousel: [{sm: 'https://small.sm.jpg', lg: 'http://large.lg.jpg'}],
      install_guide: 'https://install_guide',
      master_booklet: 'https://master_booklet'
    };
    const result = service.updatePaths(JSON.parse(JSON.stringify(actualResponse)));
    expect(result.install_guide).toEqual(actualResponse.install_guide);
    expect(result.master_booklet).toEqual(actualResponse.master_booklet);
  });
});
