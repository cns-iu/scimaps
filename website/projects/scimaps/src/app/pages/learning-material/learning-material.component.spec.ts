import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningMaterialComponent } from './learning-material.component';

describe('LearningMaterialComponent', () => {
  let component: LearningMaterialComponent;
  let fixture: ComponentFixture<LearningMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
