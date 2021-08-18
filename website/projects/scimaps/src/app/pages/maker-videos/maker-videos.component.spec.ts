import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { of } from 'rxjs';

import { MakerVideosComponent } from './maker-videos.component';
import { MakerVideosModule } from './maker-videos.module';

describe('MakerVideosComponent', () => {
  let component: MakerVideosComponent;
  let fixture: ComponentFixture<MakerVideosComponent>;

  beforeEach(async () => {
    const route = { data: of({}) };
    await TestBed.configureTestingModule({
      imports: [MakerVideosModule, MarkdownModule.forRoot()],
      providers: [{ provide: ActivatedRoute, useValue: route }, ],
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
