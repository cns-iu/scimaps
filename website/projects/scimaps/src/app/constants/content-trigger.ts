import { animate, style, transition, trigger } from "@angular/animations";

export const contentTrigger = trigger('contentTrigger', [
    transition(':enter', [
      style({
        opacity: 1,
        height: 0
      }),
      animate('200ms ease-out', style({
        opacity: 1,
        height: '*'
      })),
    ]),
    transition(':leave', [
      style({
        opacity: 1,
        height: '*'
      }),
      animate('200ms ease-in', style({
        opacity: 0,
        height: 0
      }))
    ]),
  ])