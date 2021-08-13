import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MarkdownModule } from 'ngx-markdown';
import { of } from 'rxjs';
import { VenuesBody } from './venues-body-resolver.service';
import { Venue } from './venues-resolver.service';
import { VenuesComponent } from './venues.component';
import { VenuesModule } from './venues.module';

const body: VenuesBody = {
  accordianHeader: 'header',
  accordianContent: '',
};

const venues: Venue[] = [];

describe('VenuesComponent', () => {
  let component: VenuesComponent;
  let fixture: ComponentFixture<VenuesComponent>;

  beforeEach(() => {
    const route = {data: of({body, venues})};
    TestBed.configureTestingModule({
      declarations: [VenuesComponent],
      imports: [BrowserAnimationsModule, VenuesModule, MarkdownModule.forRoot(), RouterTestingModule],
      providers: [{ provide: ActivatedRoute, useValue: route }]
    });
    fixture = TestBed.createComponent(VenuesComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`className has default value`, () => {
    expect(component.className).toEqual(`sci-venues`);
  });

  it(`yearList has default value`, () => {
    expect(component.yearList).toEqual([]);
  });

  it(`search change assigns value`, () => {
    component.onSearchChange('maps');
    expect(component.searchKey).toEqual('maps');
  });

  it(`yearList has default value`, () => {
    component.onSelectChange('2017');
    expect(component.year).toEqual('2017');
  });

  it(`yearList has default value`, () => {
    component.setYears();
    expect(component.yearList).toEqual([]);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'setYears').and.callThrough();
      component.ngOnInit();
      expect(component.setYears).toHaveBeenCalled();
    });
  });
});
