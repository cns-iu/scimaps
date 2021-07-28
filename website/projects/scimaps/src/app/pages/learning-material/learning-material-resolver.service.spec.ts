import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Params } from '@angular/router';
import { of } from 'rxjs';
import { ContentService } from '../../shared/services/content.service';
import { getLearningMaterials } from '../hosting/learning-materials-resolver.service.spec';

import { LearningMaterialResolverService } from './learning-material-resolver.service';

describe('LearningMaterialResolverServicØe', () => {
  let service: LearningMaterialResolverService;
  let contentService: Params;
  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', ['getContent']);
    TestBed.configureTestingModule({
      providers: [
        LearningMaterialResolverService,
        {provide: ContentService, useValue: contentServiceSpy}
      ]
    });
    service = TestBed.inject(LearningMaterialResolverService);
    contentService = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Hello', () => {
    const lms = getLearningMaterials(2);
    (contentService.getContent as jasmine.Spy).and.returnValue(of([lms]));
    service.resolve({params: {slug: 'sample'}});
    expect(contentService.getIndex).toHaveBeenCalledTimes(1);
  });
});
