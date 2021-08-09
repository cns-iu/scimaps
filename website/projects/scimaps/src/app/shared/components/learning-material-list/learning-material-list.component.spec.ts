import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningMaterialListComponent } from './learning-material-list.component';
import { LearningMaterialsListModule } from './learning-materials-list.module';

describe('LearningMaterialListComponent', () => {
  let component: LearningMaterialListComponent;
  let fixture: ComponentFixture<LearningMaterialListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningMaterialListComponent ],
      imports: [LearningMaterialsListModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningMaterialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
