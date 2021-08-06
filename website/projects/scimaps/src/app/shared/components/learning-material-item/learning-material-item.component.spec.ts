import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LearningMaterial } from '../../../pages/hosting/learning-materials-resolver.service';

import { LearningMaterialItemComponent } from './learning-material-item.component';
import { LearningMaterialItemModule } from './learning-material-item.module';

const getLearningMaterial = (n: number): LearningMaterial[] => {
  const result: LearningMaterial[] = [];
  for (let i = 0; i < n; i ++ ){
    result.push({
        title: `learningmaterial${i}`,
        body: 'body',
        image: {
          sm: 'small.jpg',
          lg: 'large.jpg'
        },
        slug: 'learningmaterial',
        order: i
    });
  }
  return result;
};
describe('LearningMaterialItemComponent', () => {
  let component: LearningMaterialItemComponent;
  let fixture: ComponentFixture<LearningMaterialItemComponent>;
  let router: Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningMaterialItemComponent ],
      imports: [LearningMaterialItemModule, RouterTestingModule.withRoutes([])]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningMaterialItemComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call router navigate', () => {
    component.item = getLearningMaterial(1)[0];
    const navigateSpy = spyOn(router, 'navigate');
    component.gotoLearningMaterial();
    expect(navigateSpy).toHaveBeenCalled();
  });
});
