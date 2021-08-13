import { TestBed } from '@angular/core/testing';

import { MakerVideosResolverService } from './maker-videos-resolver.service';

describe('MakerVideosResolverService', () => {
  let service: MakerVideosResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakerVideosResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
