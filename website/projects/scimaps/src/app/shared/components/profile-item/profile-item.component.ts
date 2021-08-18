import { Component, Input } from '@angular/core';
import { contentTrigger } from '../../../constants/content-trigger';
import { Profile } from '../../../core/models/profile';

@Component({
  selector: 'sci-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.scss'],
  animations: [
    contentTrigger
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

  get curatorText(): string {
    return this.profile.roles.filter((role: string) => role.includes('curator')).join(' ,');
  }

  /** Profile content - truncated if necessary */
  get partialContent(): string {
    const {
      fullContent,
      maxContentLength
    } = this;
    return `${fullContent.slice(0, maxContentLength)} ${this.hasLongContent ? '...' : ''}`;
  }

  fullContentVisible = false;
}
