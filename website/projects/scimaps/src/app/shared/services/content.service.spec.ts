import { TestBed } from '@angular/core/testing';
import { ContentService } from './content.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('ContentService', () => {
  let service: ContentService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContentService],
    });
    service = TestBed.inject(ContentService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make call to index.json when index = index (without extension)', () => {
    const indexName = 'people';
    service.getIndex(indexName).subscribe((data) => {
      expect(data).toBeTruthy();
    });
    const req = httpTestingController.expectOne(
      `assets/indexes/${indexName}.json`
    );
    expect(req.request.method).toEqual('GET');
    req.flush({});
  });

  it('should make call to index.json when index = index.json', () => {
    const indexName = 'people';
    service.getIndex(indexName).subscribe((data) => {
      expect(data).toBeTruthy();
    });
    const req = httpTestingController.expectOne(`assets/indexes/${indexName}.json`);
    expect(req.request.method).toEqual('GET');
    req.flush({
      name: 'Achim Oberg',
      last_name: 'Oberg',
      image: 'image.jpg',
      roles: ['maker'],
    });
  });

  it('should call to readme.md file when path does NOT end with readme.md', () => {
    const path = 'person/achim-oberg';
    service.getContent(path).subscribe((data) => {
      expect(data).toBeTruthy();
    });
    const req = httpTestingController.expectOne(`assets/content/${path}/readme.md`);
    expect(req.request.method).toEqual('GET');
    req.flush({});
  });

  it('should call to readme.md file when path ends with readme', () => {
    const path = 'person/achim-oberg/readme';
    service.getContent(path).subscribe((data) => {
      expect(data).toBeTruthy();
    });
    const req = httpTestingController.expectOne(`assets/content/${path}.md`);
    expect(req.request.method).toEqual('GET');
    req.flush({});
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
