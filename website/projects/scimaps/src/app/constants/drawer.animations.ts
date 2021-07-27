import {
  animate,
  group,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const drawerInOut = trigger('drawerInOut', [
  state(
    'show',
    style({
      left: 0,
    })
  ),
  state(
    'hide',
    style({
      left: '120%',
    })
  ),
  transition('hide => show', [animate('500ms ease-out')]),
  transition('show => hide', [animate('300ms ease-in')]),
  transition(':enter', [
    style({
      left: '120%',
    }),
    animate(
      '500ms ease-out',
      style({
        left: 0,
      })
    ),
  ]),
  transition(':leave', [
    style({
      left: 0,
    }),
    animate(
      '500ms ease-out',
      style({
        left: '120%',
      })
    ),
  ]),
]);

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

export const slideWithTransform = trigger('routeAnimations', [
  transition('Maps => Map', [
    style({ height: '!', width: '!' }),
    query(
      ':enter',
      style({
        transform: 'translateX(100%)',
      })
    ),
    query(
      ':enter, :leave',
      style({
        position: 'absolute',
        'max-width': '80%',
        top: 0,
        left: 0,
      })
    ),
    group([
      query(':leave', [
        animate(
          '0.2s cubic-bezier(.35,0,.25,1)',
          style({ transform: 'translateX(-100%)' })
        ),
      ]),
      query(
        ':enter',
        animate(
          '0.2s cubic-bezier(.35,0,.25,1)',
          style({ transform: 'translateX(10%)' })
        )
      ),
    ]),
  ]),
  transition('Map => Maps, 2 => 1', [
    style({ height: '!', width: '!' }),
    query(':enter', style({ transform: 'translateX(-100%)' })),
    query(
      ':enter, :leave',
      style({
        position: 'absolute',
        'max-width': '80%',
        top: 0, left: 0, right: 0
       })
    ),
    // animate the leave page away
    group([
      query(':leave', [
        animate(
          '0.2s cubic-bezier(.35,0,.25,1)',
          style({ transform: 'translateX(100%)' })
        ),
      ]),
      // and now reveal the enter
      query(
        ':enter',
        animate(
          '0.2s cubic-bezier(.35,0,.25,1)',
          style({ transform: 'translateX(0)' })
        )
      ),
    ]),
  ]),
]);
