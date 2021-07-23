import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule, MarkdownService } from 'ngx-markdown';

import { AccordianComponent } from './accordian.component';
import { AccordianModule } from './accordian.module';

describe('AccordianComponent', () => {
  let component: AccordianComponent;
  let fixture: ComponentFixture<AccordianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordianComponent ],
      imports: [AccordianModule, BrowserAnimationsModule, MarkdownModule.forRoot()]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
