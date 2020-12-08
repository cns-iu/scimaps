import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';


/**
 * Page header component
 */
@Component({
  selector: 'sci-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  /** HTML classes */
  @HostBinding('class') readonly clsName = 'sci-header';

  /**
   * Whether the sidenav button is in open mode
   */
  @Input() sidenavOpen = false;

  /**
   * Emits whenever the sidenav buttton is clicked
   */
  @Output() sidenavOpenChange = new EventEmitter<boolean>();
}
