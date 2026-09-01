import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
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
  let router: jasmine.SpyObj<Router>;
  beforeEach(async () => {
    router = jasmine.createSpyObj('Router', ['navigate']);
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
      imports: [MacroscopeModule, NoopAnimationsModule],
      declarations: [ MacroscopeDetailComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: route },
        { provide: Router, useValue: router }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroscopeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should close', fakeAsync(() => {
    component.close();
    expect(component.showOverlay).toBeFalsy();
    tick(500);
    expect(router.navigate).toHaveBeenCalledWith(['../'], {relativeTo: TestBed.inject(ActivatedRoute)});
  }));
});
