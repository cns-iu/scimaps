import { TestBed } from '@angular/core/testing';
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

  it('should call contentService.getContent once', () => {
    (contentService.getContent as jasmine.Spy).and.returnValue(
      of({
        lastiteration: 16,
        tabs: []
      })
    );
    service.resolve();
    expect(contentService.getContent).toHaveBeenCalledTimes(1);
    expect(contentService.getContent).toHaveBeenCalledWith('site/callForMacroscopes.md');
  });
});
