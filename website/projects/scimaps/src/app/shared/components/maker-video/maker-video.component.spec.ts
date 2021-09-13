import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MarkdownModule } from 'ngx-markdown';
import { of } from 'rxjs';

import { MakerVideoComponent } from './maker-video.component';
import { MakerVideoModule } from './maker-video.module';

describe('MakerVideoComponent', () => {
  let component: MakerVideoComponent;
  let fixture: ComponentFixture<MakerVideoComponent>;
  let router: Router;
  beforeEach(async () => {
    const route = {snapshot: {params: {}, data: {}}};
    const routerValue = {
      navigate: jasmine.createSpy('navigate')
    };
    await TestBed.configureTestingModule({
      imports: [MakerVideoModule, RouterTestingModule, MarkdownModule.forRoot(), NoopAnimationsModule],
      providers: [
        { provide: ActivatedRoute, useValue: route },
        { provide: Router, useValue: routerValue}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakerVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close', () => {
    component.close();
    expect(component.showOverlay).toBeFalsy();
  });

  it('should close', fakeAsync(() => {
    component.close();
    tick(500);
    expect(router.navigate).toHaveBeenCalled();
  }));

});
