import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Blog } from '../../../pages/blogs/blogs-resolver.service';

import { BlogTileComponent } from './blog-tile.component';
import { BlogTileModule } from './blog-tile.module';


export const getBlog = (n: number): Blog[] => {
  const result: Blog[] = [];
  for (let i = 0; i < n; i++) {
    result.push({
      title: `title ${i}`,
      date: new Date().toISOString(),
      body: `body ${i}`,
      slug: `title-${i}`,
      published: false,
      blogImages: [{
        sm: 'image.jpg',
        lg: 'image.jpg'
      }]
    });
  }
  return result;
};

describe('BlogTileComponent', () => {
  let component: BlogTileComponent;
  let fixture: ComponentFixture<BlogTileComponent>;
  let router: Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogTileModule, RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogTileComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create component', () => {
    const [blog] = getBlog(1);
    component.blog = blog;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('should create component', () => {
    const [blog] = getBlog(1);
    blog.blogImages = [];
    component.blog = blog;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should call router.navigate on goto', () => {
    const [blog] = getBlog(1);
    component.blog = blog;
    const spy = spyOn(router, 'navigate');
    fixture.detectChanges();
    component.gotoBlog();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
