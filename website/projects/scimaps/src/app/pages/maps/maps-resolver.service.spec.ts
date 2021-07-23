import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ContentService } from '../../shared/services/content.service';
import { MapsResolverService } from './maps-resolver.service';

describe('MapsResolverService', () => {
  let service: MapsResolverService;
  let contentService: ContentService;
  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', [
      'getIndex',
    ]);
    TestBed.configureTestingModule({
      providers: [
        MapsResolverService,
        { provide: ContentService, useValue: contentServiceSpy },
      ],
    });
    service = TestBed.inject(MapsResolverService);
    contentService = TestBed.inject(ContentService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it('makes expected calls', () => {
    (contentService.getIndex as jasmine.Spy).withArgs('app-maps').and.returnValue(of([]));
    service.resolve();
    expect(contentService.getIndex).toHaveBeenCalled();
    expect(contentService.getIndex).toHaveBeenCalledTimes(1);
  });
});
