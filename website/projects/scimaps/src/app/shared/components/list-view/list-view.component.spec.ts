import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ListViewComponent } from './list-view.component';
import { ListViewModule } from './list-view.module';


describe('ListViewComponent', () => {
  let component: ListViewComponent;
  let fixture: ComponentFixture<ListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListViewComponent ],
      imports: [ListViewModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show correct text', () => {
    component.config = {
      showAllItems: true,
      displayLimit: 6,
      items: [],
      type: 'venues'
    };
    fixture.detectChanges();
    expect(component.showText).toEqual('Show Less');
    component.config.showAllItems = false;
    fixture.detectChanges();
    expect(component.showText).toEqual(`Show More ${component.config.type}`);
  });

  it('should show correct text', () => {
    component.config = {
      showAllItems: true,
      displayLimit: 6,
      items: [{a: 1}, {b: 2}],
      type: 'venues'
    };
    fixture.detectChanges();
    expect(component.totalResultsText).toEqual(`${component.config.items.length} / ${component.config.items.length}`);
  });
});
