import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { VideoTileComponent } from './video-tile.component';
import { VideoTileModule } from './video-tile.module';
import { MarkdownModule } from 'ngx-markdown';

describe('VideoTileComponent', () => {
  let component: VideoTileComponent;
  let fixture: ComponentFixture<VideoTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoTileModule, RouterTestingModule, MarkdownModule.forRoot()],
    }).compileComponents();
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
