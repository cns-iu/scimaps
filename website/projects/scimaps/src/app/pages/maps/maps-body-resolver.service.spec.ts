import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { ContentService } from '../../shared/services/content.service';
import { MapsBodyResolverService } from './maps-body-resolver.service';

describe('MapsBodyResolverService', () => {
  let service: MapsBodyResolverService;
  let contentService: ContentService;
  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', ['getContent']);
    const routerStub = () => ({});
    TestBed.configureTestingModule({
      providers: [
        MapsBodyResolverService,
        { provide: Router, useFactory: routerStub },
        { provide: ContentService, useValue: contentServiceSpy }
      ]
    });
    service = TestBed.inject(MapsBodyResolverService);
    contentService = TestBed.inject(ContentService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it(`directory has default value`, () => {
    expect(service.directory).toEqual(`assets/content/site/maps`);
  });

  it('makes expected calls', () => {
    (contentService.getContent as jasmine.Spy).and.returnValue(of({}));
    service.resolve();
    expect(contentService.getContent).toHaveBeenCalled();
  });

  it('makes expected calls', () => {
    const testObj = {
      body: 'samplebody',
      carousel: [{
        title: 'title',
        sm: 'small.jpg',
        lg: 'lg.jpg'
      }]
    };
    const result = service.updatePaths({...testObj});
    expect(result.carousel[0].sm).toEqual('assets/content/site/maps/small.jpg');
  });
});
