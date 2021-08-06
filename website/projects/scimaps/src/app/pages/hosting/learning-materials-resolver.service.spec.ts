import { TestBed } from '@angular/core/testing';
import { Params } from '@angular/router';
import { of } from 'rxjs';
import { ContentService } from '../../shared/services/content.service';

import { LearningMaterial, LearningMaterialsResolverService } from './learning-materials-resolver.service';

export const getLearningMaterials = (n: number): LearningMaterial[] => {
  const result: LearningMaterial[] = [];
  for (let i = 0; i < n; i += 1) {
    result.push({
      title: `title-${i}`,
      body: `body-${i}`,
      image: {
        sm: `image.sm-${i}.jpg`,
        lg: `image.lg-${i}.jpg`
      },
      slug: `title-${i}`,
      order: i
    });
  }
  return result;
};
describe('LearningMaterialResolverService', () => {
  let service: LearningMaterialsResolverService;
  let contentService: Params;

  beforeEach(() => {
    const contentServiceSpy = jasmine.createSpyObj('ContentService', ['getIndex']);
    TestBed.configureTestingModule({
      providers: [
        LearningMaterialsResolverService,
        {provide: ContentService, useValue: contentServiceSpy}
      ]
    });
    service = TestBed.inject(LearningMaterialsResolverService);
    contentService = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getIndex exactly once', () => {
    const lms = getLearningMaterials(2);
    (contentService.getIndex as jasmine.Spy).withArgs('learning-materials').and.returnValue(of([lms]));
    service.resolve();
    expect(contentService.getIndex).toHaveBeenCalledTimes(1);
    expect(contentService.getIndex).toHaveBeenCalledWith('learning-materials');
  });

  it('should call getIndex exactly once', () => {
    const lm = getLearningMaterials(1)[0];
    const lmNew = service.updatePaths(JSON.parse(JSON.stringify(lm)));
    expect(lmNew.image.sm).toEqual(service.directory + '/' + lm.slug + '/' + lm.image.sm);
    expect(lmNew.image.lg).toEqual(service.directory + '/' + lm.slug + '/' + lm.image.lg);
  });
});
