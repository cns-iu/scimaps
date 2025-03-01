import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';


@Component({
  selector: 'sci-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  @HostBinding('class') readonly clsName = 'sci-contact mat-display-3';
  facebook = 'https://www.facebook.com/mappingscience';
  twitter = 'https://www.twitter.com/mappingscience';
  instagram = 'https://www.instagram.com/cns_at_iu';
  bluesky = 'https://bsky.app/profile/cnscenter.bsky.social';
}
