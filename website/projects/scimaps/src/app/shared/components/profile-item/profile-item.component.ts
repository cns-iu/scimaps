import { Component, Input } from '@angular/core';
import { Profile } from '../../../core/models/profile';

@Component({
  selector: 'sci-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.scss'],
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
