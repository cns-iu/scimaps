import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule } from '@ngxs/store';
import { MarkdownModule } from 'ngx-markdown';
import { MapMacroscopeItem } from '../../../core/models/discover-item';
import { ItemDrawerComponent } from './item-drawer.component';
import { ItemDrawerModule } from './item-drawer.module';

export const testItem: MapMacroscopeItem = {
  iteration: 1,
  title: 'Title Test',
  makers: [
    {
      name: 'Maker 1',
      title: 'title1',
      body: 'test bio',
      image: 'thumbnail',
      affiliation: 'affiliation 1',
      link: 'link1',
      slug: 'title1',
      roles: []
    },
    {
      name: 'Maker 2',
      title: 'title2',
      body: 'test bio 2',
      image: 'thumbnail 2',
      affiliation: 'affiliation 2',
      link: 'link2',
      slug: 'title2',
      roles: []
    }
  ],
  location: 'Test location',
  credit: 'Test credits',
  year: '9999',
  description: 'test description',
  references: ['Reference 1', 'Reference 2', 'Reference 3'],
  thumbnail: 'test thumbnail',
  translations: [
    {
      abbreviation: 'abbreviation',
      abbr_short: 'abbr_short',
      language: 'language',
      native: 'native'
    }
  ],
  externalLink: 'testlink'
};


describe('ItemDrawerComponent', () => {
  let component: ItemDrawerComponent;
  let fixture: ComponentFixture<ItemDrawerComponent>;
  let router: Router;
  let el: DebugElement;
  let matDialog: MatDialog;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemDrawerComponent],
      imports: [ItemDrawerModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([]),
        NgxsModule.forRoot(),
        MarkdownModule.forRoot(),
        MatDialogModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDrawerComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    el = fixture.debugElement;
    matDialog = TestBed.inject(MatDialog);
    component.item = testItem;
    component.type = 'map';
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
  it('should have correct makers', () => {
    expect(component.makers).toBe('Maker 1, Maker 2');
  });
  it('should select correct language and emit event', () => {
    const spy = spyOn(component.languageChange, 'emit');
    component.languageSelect('French');
    expect(component.selectedLanguage).toBe('French');
    expect(spy).toHaveBeenCalledWith('French');
  });
  it('should open dialog correctly', () => {
    const spy = spyOn(matDialog, 'open');
    component.openPurchase();
    expect(spy).toHaveBeenCalled();
  });
  it('should close after 500ms', fakeAsync(() => {
    const spy = spyOn(router, 'navigate');
    component.close();
    tick(500);
    expect(spy).toHaveBeenCalled();
  }));
});
