import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOverlayComponent } from './search-overlay.component';
import { SearchOverlayModule } from './search-overlay.module';

describe('SearchOverlayComponent', () => {
  let component: SearchOverlayComponent;
  let fixture: ComponentFixture<SearchOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchOverlayComponent ],
      imports: [SearchOverlayModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clear search', () => {
    component.clearSearch();
    expect(component.searchControl?.value).toEqual('');
  });
});
