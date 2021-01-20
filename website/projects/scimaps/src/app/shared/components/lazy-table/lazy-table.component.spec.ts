import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyTableComponent } from './lazy-table.component';

describe('LazyTableComponent', () => {
  let component: LazyTableComponent;
  let fixture: ComponentFixture<LazyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
