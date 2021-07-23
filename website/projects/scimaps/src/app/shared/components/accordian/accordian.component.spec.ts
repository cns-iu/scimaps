import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianComponent } from './accordian.component';
import { AccordianModule } from './accordian.module';

describe('AccordianComponent', () => {
  let component: AccordianComponent;
  let fixture: ComponentFixture<AccordianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordianComponent ],
      imports: [AccordianModule]
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
