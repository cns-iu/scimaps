import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';


/**
 * App footer
 */
@Component({
  selector: 'sci-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  /** HTML class */
  @HostBinding('class') readonly clsName = 'sci-footer';

  /** Phone number - formatted! */
  @Input() phoneNumber!: string;

  /** Acknowledgement text */
  @Input() acknowledgement!: string;
}
