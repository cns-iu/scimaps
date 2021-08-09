import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { Profile } from '../../../core/models/profile';

/**
 * Subdrawer of the item drawer containing maker information
 */
@Component({
  selector: 'sci-makers-subdrawer',
  templateUrl: './makers-subdrawer.component.html',
  styleUrls: ['./makers-subdrawer.component.scss']
})
export class MakersSubdrawerComponent {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-makers-subdrawer';

  /** Title of the item */
  @Input() title!: string;

  /** Information on each maker of the item */
  @Input() makers!: Profile[];

  /**
   * Emitted when the drawer closes
   */
  @Output() closed = new EventEmitter();
}
