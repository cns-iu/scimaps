import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Profile } from '../../../core/models/profile';

@Component({
  selector: 'sci-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.scss'],
  animations: [
    trigger('slideUpDown', [
      state('partial', style({
      })),
      state('full', style({
      })),
      // on show more / less button
      transition('partial => full', [
        style({
          transform: 'translateY(-50%)'
        }),
        animate('500ms ease-out', style({
          transform: 'translateY(0%)'
        }))
      ]),
      transition('full => partial', [
        style({
          transform: 'translateY(10%)'
        }),
        animate('200ms ease-in', style({
          transform: 'translateY(0%)'
        }))
      ]),
      // on full content 
      transition(':enter', [
        style({
          opacity: 0.5,
          transform: 'translateY(-1%)'
        }),
        animate('500ms ease-out', style({
          opacity: 1,
          transform: 'translateY(0%)'
        })),
      ]),
      transition(':leave', [
        style({
          opacity: 0.3,
          transform: 'translateY(0%)'
        }),
        animate('200ms ease-in', style({
          opacity: 0,
          transform: 'translateY(-15%)'
        }))
      ]),
    ])
  ]
})
export class ProfileItemComponent {
  @Input() profile!: Profile;
  @Input() compact = true;

  maxContentLength = 100;

  /** Whether the book content exceeds the maximum character count */
  get hasLongContent(): boolean {
    return (this.profile?.body?.length || 0) > this.maxContentLength;
  }

  /** Full profile content */
  get fullContent(): string {
    return this.profile.body;
  }

  /** Profile content - truncated if necessary */
  get partialContent(): string {
    const {
      fullContent,
      maxContentLength,
      hasLongContent,
      fullContentVisible,
    } = this;

    if (!hasLongContent || fullContentVisible) {
      return fullContent;
    }
    return `${fullContent.slice(0, maxContentLength)}...`;
  }

  fullContentVisible = false;
}
