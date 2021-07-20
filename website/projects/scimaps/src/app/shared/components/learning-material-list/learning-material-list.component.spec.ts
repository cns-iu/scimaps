import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningMaterialListComponent } from './learning-material-list.component';

describe('LearningMaterialListComponent', () => {
  let component: LearningMaterialListComponent;
  let fixture: ComponentFixture<LearningMaterialListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningMaterialListComponent ]
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
