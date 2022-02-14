import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MapMacroscopeItem } from '../../../core/models/discover-item';
import { MacroscopeModule } from '../macroscope.module';

import { MacroscopeDetailComponent } from './macroscope-detail.component';

const testItem: MapMacroscopeItem = {
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
  externalLink: 'testlink',
  videoLink: 'testVideo'
};

describe('MacroscopeDetailComponent', () => {
  let component: MacroscopeDetailComponent;
  let fixture: ComponentFixture<MacroscopeDetailComponent>;

  beforeEach(async () => {
    const route = {
      parent: {
        snapshot: {
          data: {
            macroscope: testItem
          }
        }
      }
    };
    await TestBed.configureTestingModule({
      imports: [MacroscopeModule, RouterTestingModule, NoopAnimationsModule],
      declarations: [ MacroscopeDetailComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: route }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroscopeDetailComponent);
    component = fixture.componentInstance;
    component.item = testItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.item = testItem;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
