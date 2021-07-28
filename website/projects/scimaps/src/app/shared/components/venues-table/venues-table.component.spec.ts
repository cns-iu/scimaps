import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';

import { VenuesTableComponent } from './venues-table.component';
import { VenuesTableModule } from './venues-table.module';

describe('VenuesTableComponent', () => {
  let component: VenuesTableComponent;
  let fixture: ComponentFixture<VenuesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenuesTableModule, BrowserAnimationsModule, NgxsModule.forRoot([])]
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
