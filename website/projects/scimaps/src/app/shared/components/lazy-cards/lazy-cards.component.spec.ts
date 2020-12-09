import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyCardsComponent } from './lazy-cards.component';

describe('LazyCardsComponent', () => {
  let component: LazyCardsComponent;
  let fixture: ComponentFixture<LazyCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
