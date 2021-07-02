import { animate, state, style, transition, trigger } from '@angular/animations';

export const drawerInOut = trigger('drawerInOut', [
    state('show', style({
      left: 0,
    })),
    state('hide', style({
      left: '120%',
    })),
    transition('hide => show', [
      animate('500ms ease-out')
    ]),
    transition('show => hide', [
      animate('300ms ease-in')
    ]),
    transition(':enter', [
      style({
        left: '120%'
      }),
      animate('500ms ease-out', style({
        left: 0
      }))
    ]),
    transition(':leave', [
      style({
        left: 0
      }),
      animate('500ms ease-out', style({
        left: '120%'
      }))
    ]),
  ]);

