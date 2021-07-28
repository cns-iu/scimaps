import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { LearningMaterialItemComponent } from './learning-material-item.component';
import { LearningMaterialItemModule } from './learning-material-item.module';

describe('LearningMaterialItemComponent', () => {
  let component: LearningMaterialItemComponent;
  let fixture: ComponentFixture<LearningMaterialItemComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
