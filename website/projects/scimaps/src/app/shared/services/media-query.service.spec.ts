import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

import { WINDOW } from '../utils/global-di-tokens';
import { MediaQueryService } from './media-query.service';


function getStreamValues<T>(
  obs: Observable<T>, count: number
): Promise<T[]> {
  return obs.pipe(
    take(count),
    toArray()
  ).toPromise();
}

function createMediaQueryList(
  matches = false, changes: boolean[] = []
): jasmine.SpyObj<MediaQueryList> {
  function addEventListener(
    this: MediaQueryList, type: 'change',
    listener: (this: MediaQueryList, event: MediaQueryListEvent) => unknown,
    _options?: unknown
  ): void {
    for (const change of changes) {
      const event = new MediaQueryListEvent(type, { matches: change });
      listener.call(this, event);
    }
  }

  const mq = jasmine.createSpyObj<MediaQueryList>(
    'MQL', ['addEventListener', 'removeEventListener'], { matches }
  );
  mq.addEventListener.and.callFake(
    addEventListener as typeof MediaQueryList.prototype.addEventListener
  );
  return mq;
}

describe('MediaQueryService', () => {
  let matchMedia: jasmine.Spy<typeof window['matchMedia']>;
  let service: MediaQueryService;

  beforeEach(() => {
    matchMedia = jasmine.createSpy();
    matchMedia.and.callFake(() => createMediaQueryList());

    TestBed.configureTestingModule({
      providers: [{
        provide: WINDOW,
        useValue: { matchMedia }
      }]
    });

    service = TestBed.inject(MediaQueryService);
  });

  describe('.test(query)', () => {
    it('uses matchMedia', () => {
      service.test('print');
      expect(matchMedia).toHaveBeenCalled();
    });

    it('gets the result synchronously', () => {
      const res = service.test('screen');
      expect(res).toBeFalse();
    });
  });

  describe('.createStream(query)', () => {
    let stream: Observable<boolean>;

    beforeEach(() => {
      matchMedia.and.callFake(() => createMediaQueryList(true, [false, true, false]));
      stream = service.createStream('screen');
    });

    it('emits the initial state', async () => {
      const [first] = await getStreamValues(stream, 1);
      expect(first).toBeTrue();
    });

    it('emits on each change', async () => {
      const [_first, ...rest] = await getStreamValues(stream, 4);
      expect(rest).toEqual([false, true, false]);
    });
  });
});
