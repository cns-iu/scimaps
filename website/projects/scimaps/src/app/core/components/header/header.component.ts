import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';


@Component({
  selector: 'sci-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @HostBinding('class') readonly clsName = 'sci-header';

  @Input() sidenavOpen = false;

  @Output() sidenavOpenChange = new EventEmitter<boolean>();
}
