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



export const isSearchOpenTrigger = trigger('isSearchOpenTrigger', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(25%)'
    }),
    animate('200ms ease-in', style({
      opacity: 1,
      transform: 'translateX(0%)'
    }))
  ]),
  transition(':leave', [
    style({
      opacity: 1
    }),
    animate('100ms ease-out', style({
      opacity: 0,
      transform: 'translateX(25%)'
    }))
  ]),
]);
