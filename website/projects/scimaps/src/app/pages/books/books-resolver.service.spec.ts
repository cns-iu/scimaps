import { TestBed } from '@angular/core/testing';

import { BooksResolverService } from './books-resolver.service';

describe('BooksResolverService', () => {
  let service: BooksResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
