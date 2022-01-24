import { Injectable, OnDestroy } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { RouterNavigation } from '@ngxs/router-plugin';
import { Actions, ofActionCompleted, State } from '@ngxs/store';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
@State({
  name: 'routerFacade'
})
@Injectable()
export class RouterState implements OnDestroy {
  private readonly destroy$ = new Subject<void>();

  readonly navigationStart$ = this.router.events.pipe(
    filter((ev): ev is NavigationStart => ev instanceof NavigationStart),
    map(ev => ev.url),
    takeUntil(this.destroy$)
  );

  readonly navigationEnd$ = this.actions$.pipe(
    ofActionCompleted(RouterNavigation),
    map(ev => (ev.action as RouterNavigation).event.url),
    takeUntil(this.destroy$)
  );

  constructor(
    private readonly actions$: Actions,
    private readonly router: Router
  ) {
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
