import { TestBed } from '@angular/core/testing';

import { CallForMacroscopesBodyResolver } from './call-for-macroscopes-body.resolver';

describe('AbcService', () => {
  let service: CallForMacroscopesBodyResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallForMacroscopesBodyResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
