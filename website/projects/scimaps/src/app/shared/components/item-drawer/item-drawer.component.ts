import { Component, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { MapItem } from '..//discover-listing/discover-item';

@Component({
  selector: 'sci-item-drawer',
  templateUrl: './item-drawer.component.html',
  styleUrls: ['./item-drawer.component.scss']
})
export class ItemDrawerComponent {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-item-drawer';

  @Input() item!: MapItem;

  @Output() closeDrawer = new EventEmitter<string>();

  get makers(): string {
    return this.item.makers.join(', ');
  }

  close(): void {
    this.closeDrawer.emit();
  }
}
