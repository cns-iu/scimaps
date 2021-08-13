import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerVideosComponent } from './maker-videos.component';

describe('MakerVideosComponent', () => {
  let component: MakerVideosComponent;
  let fixture: ComponentFixture<MakerVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakerVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
