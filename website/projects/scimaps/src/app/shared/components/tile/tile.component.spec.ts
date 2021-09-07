import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { TileComponent } from './tile.component';
import { TileModule } from './tile.module';

describe('TileComponent', () => {
  let component: TileComponent;
  let fixture: ComponentFixture<TileComponent>;

  beforeEach(async () => {
    const route = {data: of({})};
    await TestBed.configureTestingModule({
      imports: [TileModule, RouterTestingModule, BrowserAnimationsModule],
      providers: [{ provide: ActivatedRoute, useValue: route }, ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should close', () => {
    component.close();
    expect(component.show).toBeFalse();
  });
});
