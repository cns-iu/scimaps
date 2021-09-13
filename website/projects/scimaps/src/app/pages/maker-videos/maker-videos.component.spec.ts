import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MarkdownModule } from 'ngx-markdown';
import { of } from 'rxjs';

import { MakerVideosComponent } from './maker-videos.component';
import { MakerVideosModule } from './maker-videos.module';

describe('MakerVideosComponent', () => {
  let component: MakerVideosComponent;
  let fixture: ComponentFixture<MakerVideosComponent>;
  let router: Router;
  beforeEach(async () => {
    const route = { data: of({}) };
    const routerValue = {
      navigate: jasmine.createSpy('navigate')
    };
    await TestBed.configureTestingModule({
      imports: [MakerVideosModule, MarkdownModule.forRoot(), RouterTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: route },
        { provide: Router, useValue: routerValue },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
