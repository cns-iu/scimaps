import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningMaterialItemComponent } from './learning-material-item.component';

describe('LearningMaterialItemComponent', () => {
  let component: LearningMaterialItemComponent;
  let fixture: ComponentFixture<LearningMaterialItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningMaterialItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningMaterialItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
