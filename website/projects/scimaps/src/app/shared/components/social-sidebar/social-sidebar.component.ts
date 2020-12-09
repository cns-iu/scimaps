import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'sci-social-sidebar',
  templateUrl: './social-sidebar.component.html',
  styleUrls: ['./social-sidebar.component.scss']
})
export class SocialSidebarComponent {
  // Component class name
  @HostBinding('class') readonly clsName = 'sci-social-sidebar';

  goToLink(link: string): void {
    window.open(link, '_blank');
  }
}
