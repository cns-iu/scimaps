import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

// apply on main and main should have relative position on it.
export const fader = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'scale(0) translateY()',
      }),
    ], {optional: true}),
    query(':enter', [
      animate(
        '200ms ease',
        style({
          opacity: 1,
          transform: 'scale(1) translateY(0)',
        })
      ),
    ], {optional: true}),
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
