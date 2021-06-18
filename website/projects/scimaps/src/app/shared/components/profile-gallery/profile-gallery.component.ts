import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Profile } from '../../../core/models/profile';

@Component({
  selector: 'sci-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.scss']
})
export class ProfileGalleryComponent implements OnInit {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-profile-gallery';

  @Input() profiles!: Profile[];
  @Input() compact = true;
  @Input() title = '';
  @Input() description = '';
  @Input() groupBy = '';

  profilesByGroup: { [key: string]: Profile[] } = {};

  ngOnInit(): void {
    if (this.groupBy) {
      this.profilesByGroup = this.profiles.reduce((accumelator: { [key: string]: Profile[] }, profile: Profile) => {
        // const key = profile[]
        return accumelator;
      }, {});
    }
  }

  goToLink(link: string): void {
    window.open(link, '_blank');
  }
}
