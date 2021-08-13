import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { VenuesTableComponent } from './venues-table.component';
import { VenuesTableModule } from './venues-table.module';


describe('VenuesTableComponent', () => {
  let component: VenuesTableComponent;
  let fixture: ComponentFixture<VenuesTableComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenuesTableModule, BrowserAnimationsModule, MatIconTestingModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenuesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
