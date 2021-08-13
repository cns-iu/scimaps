import { TestBed } from '@angular/core/testing';

import { MakerVideosBodyResolverService } from './maker-videos-body-resolver.service';

describe('MakerVideosBodyResolverService', () => {
  let service: MakerVideosBodyResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakerVideosBodyResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
