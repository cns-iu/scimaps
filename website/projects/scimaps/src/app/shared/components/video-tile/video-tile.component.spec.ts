import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTileComponent } from './video-tile.component';

describe('VideoTileComponent', () => {
  let component: VideoTileComponent;
  let fixture: ComponentFixture<VideoTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
