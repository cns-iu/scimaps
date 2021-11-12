import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BlogTileComponent } from './blog-tile.component';
import { BlogTileModule } from './blog-tile.module';

describe('BlogTileComponent', () => {
  let component: BlogTileComponent;
  let fixture: ComponentFixture<BlogTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogTileModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
