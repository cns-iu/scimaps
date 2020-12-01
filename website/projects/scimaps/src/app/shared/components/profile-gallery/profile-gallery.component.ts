import { Component, HostBinding, Input } from '@angular/core';
import { Profile } from '../../../core/models/profile';

@Component({
  selector: 'sci-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.scss']
})
export class ProfileGalleryComponent {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-profile-gallery';

  @Input() profiles!: Profile[];
  @Input() directory!: string;
  @Input() compact = true;
  @Input() title = '';
  @Input() description = '';

  getImageSource(profile: Profile): string {
    return `assets/${this.directory}/${profile.slug}/image.png`;
  }
}
