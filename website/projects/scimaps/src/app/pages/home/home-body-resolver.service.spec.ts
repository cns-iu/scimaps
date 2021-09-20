import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { Params } from '@angular/router';
import { of } from 'rxjs';
import { ContentService } from '../../shared/services/content.service';

import { HomeBodyResolverService } from './home-body-resolver.service';

describe('HomeResolverService', () => {
  let service: HomeBodyResolverService;
  let contentService: Params;
  const originalResponse = {
    cta: {
      title: 'title',
      subtitle: 'subttile',
      body: 'body',
      buttonLink: 'buttonLink',
      buttonLabel: 'buttonLabel',
      imageSource: 'imageSource.jpg'
    }
  };
  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', ['getContent']);
    TestBed.configureTestingModule({
      providers: [
        HomeBodyResolverService,
        {provide: ContentService, useValue: contentServiceSpy}
      ]
    });
    service = TestBed.inject(HomeBodyResolverService);
    contentService = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be created', fakeAsync(() => {
    (contentService.getContent as jasmine.Spy).and.returnValue(
      of({cta: {...originalResponse.cta}})
    );
    const data = service.resolve();
    flushMicrotasks();
    expect(contentService.getContent).toHaveBeenCalledTimes(1);
    data.subscribe(response => {
      const cta = response.cta;
      expect(cta).toBeTruthy();
      expect(cta.title).toEqual(originalResponse.cta.title);
      expect(cta.subtitle).toEqual(originalResponse.cta.subtitle);
      expect(cta.body).toEqual(originalResponse.cta.body);
      expect(cta.buttonLabel).toEqual(originalResponse.cta.buttonLabel);
      expect(cta.imageSource).toEqual(`${service.directory}/${originalResponse.cta.imageSource}`);
    });
  }));
});
