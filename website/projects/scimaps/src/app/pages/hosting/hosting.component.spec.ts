import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { of } from 'rxjs';
import { HostingBody } from './hosting-body-resolver.service';
import { HostingComponent } from './hosting.component';
import { HostingModule } from './hosting.module';
import { LearningMaterial } from './learning-materials-resolver.service';

describe('HostingComponent', () => {
  let component: HostingComponent;
  let fixture: ComponentFixture<HostingComponent>;

  const body: HostingBody = {
    tabs: [{header: 'header1', content: 'content1', image: 'image1'}],
    overview: 'overview',
    carousel: [{sm: '', lg: ''}],
    install_guide: 'install_guide',
    master_booklet: 'master_booklet'
  };
  const learningMaterials: LearningMaterial[] = [];
  beforeEach(() => {
    const route = {data: of({body, learningMaterials})};
    TestBed.configureTestingModule({
      imports: [HostingModule, MarkdownModule.forRoot()],
      providers: [{ provide: ActivatedRoute, useValue: route }]
    });
    fixture = TestBed.createComponent(HostingComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`clsName has default value`, () => {
    expect(component.clsName).toEqual(`sci-hosting`);
  });

  it(`learningMaterials has default value`, () => {
    expect(component.learningMaterials).toEqual([]);
  });

  it(`overviewText has default value`, () => {
    expect(component.overviewText).toEqual(`Hello`);
  });

  it(`carouselImages has default value`, () => {
    expect(component.carouselImages).toEqual([]);
  });

  it(`activePageTab has default value`, () => {
    expect(component.activePageTab).toEqual(0);
  });

  it(`tabs has default value`, () => {
    expect(component.tabs).toEqual([]);
  });

  it(`showTab has default value`, () => {
    expect(component.showTab).toEqual(false);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'getBodyContent').and.callThrough();
      component.ngOnInit();
      expect(component.getBodyContent).toHaveBeenCalled();
    });
  });
});
