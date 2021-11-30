import { TestBed } from '@angular/core/testing';

import { MakerVideoResolverService } from './maker-video-resolver.service';

describe('MakerVideoResolverService', () => {
  let service: MakerVideoResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakerVideoResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
