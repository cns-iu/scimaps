import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { ContentService } from '../../shared/services/content.service';
import { of } from 'rxjs';
import { Params } from '@angular/router';
import { CallForMacroscopesBodyResolver } from './call-for-macroscopes-body-resolver.service';

describe('CallForMacroscopesBody', () => {
  let service: CallForMacroscopesBodyResolver;
  let contentService: Params;
  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', ['getContent']);
    TestBed.configureTestingModule({
      providers: [
        CallForMacroscopesBodyResolver,
        {provide: ContentService, useValue: contentServiceSpy}
      ]
    });
    service = TestBed.inject(CallForMacroscopesBodyResolver);
    contentService = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call contentService.getContent once', fakeAsync(() => {
    const actualResponse = {
      submitURL: 'https://www.cns.org/submit',
      pdfLink: 'https://www.cns.org/pdf',
      lastiteration: 16,
      tabs: []
    };
    (contentService.getContent as jasmine.Spy).and.returnValue(
      of(actualResponse)
    );
    const data = service.resolve();
    flushMicrotasks();
    expect(contentService.getContent).toHaveBeenCalledTimes(1);
    expect(contentService.getContent).toHaveBeenCalledWith('site/callForMacroscopes.md');
    data.subscribe((response) => {
      expect(response.pdfLink).toEqual(actualResponse.pdfLink);
    });
  }));
  it('should convert pdf URL', fakeAsync(() => {
    const actualResponse = {
      submitURL: 'https://www.cns.org/submit',
      pdfLink: 'abc',
      lastiteration: 16,
      tabs: []
    };
    (contentService.getContent as jasmine.Spy).and.returnValue(
      of({...actualResponse})
    );
    const data = service.resolve();
    flushMicrotasks();
    data.subscribe((response) => {
      expect(response).toBeTruthy();
      expect(response.pdfLink).toEqual(`${service.directory}/${actualResponse.pdfLink}`);
    });
  }));
});
