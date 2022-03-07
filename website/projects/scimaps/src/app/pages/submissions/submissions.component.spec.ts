import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { SubmissionModule } from '../submission/submission.module';

import { SubmissionsComponent } from './submissions.component';

describe('SubmissionsComponent', () => {
  let component: SubmissionsComponent;
  let fixture: ComponentFixture<SubmissionsComponent>;

  beforeEach(async () => {
    const route = {
      snapshot: {
        params: {},
        data: {}
      },
    };
    await TestBed.configureTestingModule({
      imports: [
        SubmissionModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: route }, 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
