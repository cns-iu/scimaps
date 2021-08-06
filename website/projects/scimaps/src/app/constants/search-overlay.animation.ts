import { animate, style, transition, trigger } from '@angular/animations';

export const isSearchOpenTrigger = trigger('isSearchOpenTrigger', [
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(25%)',
      }),
      animate(
        '200ms ease-in',
        style({
          opacity: 1,
          transform: 'translateX(0%)',
        })
      ),
    ]),
    transition(':leave', [
      style({
        opacity: 1,
      }),
      animate(
        '100ms ease-out',
        style({
          opacity: 0,
          transform: 'translateX(25%)',
        })
      ),
    ]),
  ]);
