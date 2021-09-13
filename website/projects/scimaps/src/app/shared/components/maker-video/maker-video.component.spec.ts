import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakerVideoComponent } from './maker-video.component';

describe('MakerVideoComponent', () => {
  let component: MakerVideoComponent;
  let fixture: ComponentFixture<MakerVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakerVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
