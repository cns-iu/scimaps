import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';


@Component({
  selector: 'sci-menu-icon',
  templateUrl: './menu-icon.component.html',
  styleUrls: ['./menu-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuIconComponent {
  @HostBinding('class') readonly clsName = 'sci-menu-icon';

  @Input() alternateIcon = false;
}
