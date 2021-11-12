import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { getBlog } from '../../shared/components/blog-tile/blog-tile.component.spec';
import { BlogsComponent } from './blogs.component';
import { BlogsModule } from './blogs.module';


describe('BlogsComponent', () => {
  let component: BlogsComponent;
  let fixture: ComponentFixture<BlogsComponent>;
  let router: Router;
  beforeEach(async () => {
    const route = {
      snapshot: {
        data: {
          blogs: []
        }
      }
    };
    await TestBed.configureTestingModule({
      imports: [BlogsModule, RouterTestingModule, NoopAnimationsModule],
      providers: [
        { provide: ActivatedRoute, useValue: route }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    const spy = spyOn(router, 'navigate');
    component.blogs = getBlog(2);
    component.gotoBlog(1);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
