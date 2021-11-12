import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { BlogsComponent } from './blogs.component';
import { BlogsModule } from './blogs.module';

describe('BlogsComponent', () => {
  let component: BlogsComponent;
  let fixture: ComponentFixture<BlogsComponent>;

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
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
