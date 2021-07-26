import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ContentService } from '../../shared/services/content.service';
import { MacroscopesResolverService } from './macroscopes-resolver.service';


describe('MacroscopesResolverService', () => {
  let service: MacroscopesResolverService;
  let contentService: ContentService;
  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', [
      'getIndex',
    ]);
    TestBed.configureTestingModule({
      providers: [
        MacroscopesResolverService,
        { provide: ContentService, useValue: contentServiceSpy },
      ],
    });
    service = TestBed.inject(MacroscopesResolverService);
    contentService = TestBed.inject(ContentService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it('makes expected calls', () => {
    (contentService.getIndex as jasmine.Spy).withArgs('app-macroscopes').and.returnValue(of([]));
    service.resolve();
    expect(contentService.getIndex).toHaveBeenCalled();
    expect(contentService.getIndex).toHaveBeenCalledTimes(1);
  });
});
