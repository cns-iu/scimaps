import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MarkdownModule } from 'ngx-markdown';
import { getMakerVideo } from '../../../pages/maker-videos/maker-videos-resolver.service';
import { MakerVideoComponent } from './maker-video.component';
import { MakerVideoModule } from './maker-video.module';

const video = getMakerVideo(1)[0];

describe('MakerVideoComponent', () => {
  let component: MakerVideoComponent;
  let fixture: ComponentFixture<MakerVideoComponent>;
  let router: Router;
  beforeEach(async () => {
    const route = {
      snapshot: {
        params: { slug: video.slug },
        data: {
          video
        }
      },
    };
    const routerValue = {
      navigate: jasmine.createSpy('navigate')
    };
    await TestBed.configureTestingModule({
      imports: [MakerVideoModule, RouterTestingModule, MarkdownModule.forRoot(), NoopAnimationsModule],
      providers: [
        { provide: ActivatedRoute, useValue: route },
        { provide: Router, useValue: routerValue }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerVideoComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct video', () => {
    expect(component.video.slug).toEqual(video.slug);
  });

  it('should close', () => {
    component.close();
    expect(component.showOverlay).toBeFalsy();
  });

  it('should navigate after close', fakeAsync(() => {
    component.close();
    tick(500);
    expect(router.navigate).toHaveBeenCalled();
  }));

});
