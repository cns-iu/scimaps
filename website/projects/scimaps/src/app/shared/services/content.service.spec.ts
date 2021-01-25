import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { EMPTY } from 'rxjs';

import { ContentService } from './content.service';


describe('ContentService', () => {
  let service: ContentService;
  let httpGet: jasmine.Spy;

  beforeEach(() => {
    httpGet = jasmine.createSpy('get', () => EMPTY);

    TestBed.configureTestingModule({
      providers: [{
        provide: HttpClient,
        useValue: { get: httpGet }
      }]
    });
    service = TestBed.inject(ContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
