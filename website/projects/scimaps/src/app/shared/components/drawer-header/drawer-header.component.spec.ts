import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerHeaderComponent } from './drawer-header.component';

describe('DrawerHeaderComponent', () => {
  let component: DrawerHeaderComponent;
  let fixture: ComponentFixture<DrawerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawerHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
