import { animate, state, style, transition, trigger } from "@angular/animations";

export const drawerInOut = trigger('drawerInOut', [
    state('show', style({
      position: 'absolute',
      left: 0,
      color: 'red',
      'z-index': 5,
      'overflow-y': 'scroll'
    })),
    state('hide', style({
      position: 'absolute',
      left: '120%',
      color: 'blue',
      'z-index': 5,
      'overflow-y': 'scroll'
    })),
    transition('hide => show', [
      animate('1000ms ease-in')
    ]),
    transition('show => hide', [
      animate('1000ms ease-in')
    ])
  ])