import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningMaterialsComponent } from './learning-materials.component';

describe('LearningMaterialsComponent', () => {
  let component: LearningMaterialsComponent;
  let fixture: ComponentFixture<LearningMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningMaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
