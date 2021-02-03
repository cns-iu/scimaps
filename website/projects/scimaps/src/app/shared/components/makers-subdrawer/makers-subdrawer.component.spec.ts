import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakersSubdrawerComponent } from './makers-subdrawer.component';

describe('MakersSubdrawerComponent', () => {
  let component: MakersSubdrawerComponent;
  let fixture: ComponentFixture<MakersSubdrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakersSubdrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakersSubdrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
