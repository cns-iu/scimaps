import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

// apply on main and main should have relative position on it.
export const fader = trigger('routeAnimations', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY()',
        }),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        animate(
          '200ms ease',
          style({
            opacity: 1,
            transform: 'scale(1) translateY(0)',
          })
        ),
      ],
      { optional: true }
    ),
  ]),
]);

const slideTo = (direction: string) => {
  const optional = { optional: true };

  return [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          [direction]: 0,
          width: '100%',
        }),
      ],
      optional
    ),
    query(':enter', [
      style({
        [direction]: '-100%',
      }),
    ]),
    group([
      query(
        ':leave',
        [
          animate(
            '200ms ease',
            style({
              [direction]: '100%',
            })
          ),
        ],
        optional
      ),
      query(
        ':enter',
        [
          animate(
            '200ms ease',
            style({
              [direction]: '0%',
            })
          ),
        ],
        optional
      ),
    ]),
  ];
};

export const slider = trigger('routeAnimations', [
  transition('Maps => Map', slideTo('right')),
  transition('Map => Maps', slideTo('left')),
  transition('* => isLeft', slideTo('left')),
  transition('* => isRight', slideTo('right')),
  transition('isRight => *', slideTo('right')),
  transition('isLeft => *', slideTo('right')),
]);

const transformTo = ({ x = -100, y = 0, rotate = 0 }) => {
  const optional = { optional: true };
  return [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ],
      optional
    ),
    query(':enter', [
      style({
        transform: `tranlate(${x}%, ${y}%) rotate(${rotate}deg)`,
      }),
    ]),
    group([
      query(
        ':leave',
        [
          animate('200ms ease-out'),
          style({
            transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`,
          }),
        ],
        optional
      ),
      query(':enter', [
        animate(
          '200ms ease-out',
          style({
            transform: `translate(0, 0) rotate(0)`,
          })
        ),
      ]),
    ]),
  ];
};

export const transformer = trigger('routeAnimations', [
  transition('Maps => Map', transformTo({ x: -100, y: -100, rotate: -720 })),
  transition('Map => Maps', transformTo({ x: -100, y: -100, rotate: -720 })),
  transition('* => isLeft', transformTo({ x: -100, y: -100, rotate: -720 })),
  transition('* => isRight', transformTo({ x: -100, y: -100, rotate: -720 })),
  transition('isRight => *', transformTo({ x: -100, y: -100, rotate: -720 })),
  transition('isLeft => *', transformTo({ x: -100, y: -100, rotate: -720 })),
]);

export const routeTransitionAnimations = trigger('routeAnimations', [
  transition('Maps => Map, Macroscopes => Macroscope', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ right: '-100%', opacity: 0 })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('500ms ease-out', style({ right: '100%', opacity: 0 })),
      ]),
      query(':enter', [
        animate('500ms ease-out', style({ right: '0%', opacity: 1 })),
      ]),
    ]),
    query(':enter', animateChild()),
  ]),
  transition('Map => Maps, Macroscope => Macroscopes', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%', opacity: 0 })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('300ms ease-out', style({ left: '100%', opacity: 0 })),
      ]),
      query(':enter', [
        animate('300ms ease-out', style({ left: '0%', opacity: 1 })),
      ]),
    ]),
    query(':enter', animateChild()),
  ]),
]);



const transitions = [
  ['Maps', 'Map'],
  ['Macroscopes', 'Macroscope'],
  ['Hosting', 'LearningMaterial']
];
const forward = transitions.map(item => {
  return [item[0], item[1]].join(' => ');
}).join(', ');
const backward = transitions.map(item => {
  return [item[1], item[0]].join(' => ');
}).join(', ');

export const slideWithTransform = trigger('routeAnimations', [
  transition(`${forward}`, [
    style({ height: '!', width: '!' }),
    query(
      ':enter',
      style({
        transform: 'translateX(100%)',
      })
    ),
    query(
      ':enter',
      style({
        position: 'fixed',
        top: '72px',
        padding: '0 1rem',
        'margin-top': '1rem',
        'max-width': '80rem',
        background: 'white',
        'z-index': 2,
        width: '100%',
        'overflow-y': 'scroll'
      })
    ),
    group([
      // query(':leave', [
      //   animate(
      //     '3.3s cubic-bezier(.35,0,.25,1)',
      //     style({ transform: 'translateX(-100%)' })
      //   ),
      // ]),
      query(
        ':enter',
        animate(
          '0.5s cubic-bezier(.35,0,.25,1)',
          style({ transform: 'translateX(0%)' })
        )
      ),
    ]),
  ]),
  transition(`${backward}`, [
    style({ height: '!', width: '!' }),
    // query(':enter', style({ transform: 'translateX(-100%)' })),
    query(
      ':leave',
      style({
        position: 'fixed',
        top: '72px',
        'margin-top': '1rem',
        background: 'white',
        padding: '0 1rem',
        width: '100%',
        'overflow-y': 'scroll',
        'z-index': 2
      })
    ),
    // animate the leave page away
    group([
      query(':leave', [
        animate(
          '0.5s cubic-bezier(.35,0,.25,1)',
          style({ transform: 'translateX(100%)' })
        ),
      ]),
      // and now reveal the enter
      // query(
      //   ':enter',
      //   animate(
      //     '0.3s cubic-bezier(.35,0,.25,1)',
      //     style({ transform: 'translateX(0)' })
      //   )
      // ),
    ]),
  ]),
]);
