import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MarkdownModule } from 'ngx-markdown';
import { of } from 'rxjs';

import { SubmissionComponent } from './submission.component';
import { SubmissionModule } from './submission.module';
import { discoverItem } from '../macroscopes/macroscopes.component.spec';

describe('SubmissionComponent', () => {
  let component: SubmissionComponent;
  let fixture: ComponentFixture<SubmissionComponent>;
  const testItem = {...discoverItem, makers: []};
  beforeEach(async () => {
    const route = {
      data: of({
        submission: testItem
      })
    };
    await TestBed.configureTestingModule({
      imports: [
        SubmissionModule,
        RouterTestingModule,
        MarkdownModule.forRoot(),
        NoopAnimationsModule
      ],
      providers: [
        { provide: ActivatedRoute, useValue: route }, 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
