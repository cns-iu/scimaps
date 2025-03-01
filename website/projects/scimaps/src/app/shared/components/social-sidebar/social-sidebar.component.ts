import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'sci-social-sidebar',
  templateUrl: './social-sidebar.component.html',
  styleUrls: ['./social-sidebar.component.scss']
})
export class SocialSidebarComponent {
  // Component class name
  @HostBinding('class') readonly clsName = 'sci-social-sidebar';

  facebook = 'https://www.facebook.com/mappingscience';
  twitter = 'https://www.twitter.com/mappingscience';
  instagram = 'https://www.instagram.com/cns_at_iu';
  bluesky = 'https://bsky.app/profile/cnscenter.bsky.social';

  goToLink(link: string): void {
    window.open(link, '_blank');
  }
}
