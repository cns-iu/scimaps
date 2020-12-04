import { Inject, Injectable } from '@angular/core';
import { defer, fromEvent, Observable, of } from 'rxjs';
import { concatAll, pluck } from 'rxjs/operators';

import { GlobalThis, WINDOW } from '../utils/global-di-tokens';


/**
 * Service for testing and creating streams of media queries
 */
@Injectable({
  providedIn: 'root'
})
export class MediaQueryService {
  /**
   * Creates an instance of media query service.
   *
   * @param window The global window
   */
  constructor(@Inject(WINDOW) private readonly window: GlobalThis) { }

  /**
   * Synchronously tests a media query
   *
   * @param query Query to test
   * @returns true if the query matches false otherwise
   */
  test(query: string): boolean {
    return this.window.matchMedia(query).matches;
  }

  /**
   * Creates a stream for a media query that emits whenever the matching state changes
   *
   * @param query Query to test
   * @returns Stream of matches
   */
  createStream(query: string): Observable<boolean> {
    const mq = this.window.matchMedia(query);
    const first = defer(() => [mq.matches]);
    const events = fromEvent<MediaQueryListEvent>(mq, 'change').pipe(pluck('matches'));

    return of(first, events).pipe(concatAll());
  }
}
