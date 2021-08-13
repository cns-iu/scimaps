import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MarkdownModule } from 'ngx-markdown';
import { of } from 'rxjs';

import { LearningMaterialComponent } from './learning-material.component';
import { LearningMaterialModule } from './learning-material.module';

describe('LearningMaterialComponent', () => {
  let component: LearningMaterialComponent;
  let fixture: ComponentFixture<LearningMaterialComponent>;

  beforeEach(async () => {
    const route = {data: of({learningMaterial: {}})};
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, LearningMaterialModule, MarkdownModule.forRoot(), RouterTestingModule.withRoutes([])],
      providers: [{ provide: ActivatedRoute, useValue: route }]
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
