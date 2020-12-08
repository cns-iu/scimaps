import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';


@Component({
  selector: 'sci-mobile-header-menu',
  templateUrl: './mobile-header-menu.component.html',
  styleUrls: ['./mobile-header-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileHeaderMenuComponent {
  /** HTML class */
  @HostBinding('class') readonly clsName = 'sci-mobile-header-menu';
}
