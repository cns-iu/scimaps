import { Component, Input, Output, HostBinding, EventEmitter } from '@angular/core';
import { MakerInfo } from '../../../core/models/discover-item';

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
  @Input() makers!: MakerInfo[];

  /**
   * Emitted when the drawer closes
   */
  @Output() closeDrawer = new EventEmitter();

  /**
   * Closes the drawer
   */
  close(): void {
    this.closeDrawer.emit();
  }
}