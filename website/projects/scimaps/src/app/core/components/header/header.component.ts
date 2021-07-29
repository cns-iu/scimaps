import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { Params } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PageState } from '../../state/page/page.state';


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
  @HostBinding('class') readonly clsName = 'sci-header mat-display-3';

  /**
   * Whether the sidenav button is in open mode
   */
  @Input() sidenavOpen = false;

  /**
   * Emits whenever the sidenav buttton is clicked
   */
  @Output() sidenavOpenChange = new EventEmitter<boolean>();

  @Select(PageState.drawer) drawer$!: Observable<Params>;
}
