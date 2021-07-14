import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortHeadersComponent } from './sort-headers.component';

describe('SortHeadersComponent', () => {
  let component: SortHeadersComponent;
  let fixture: ComponentFixture<SortHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortHeadersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
