import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'sci-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.scss']
})
export class TabHeaderComponent{
  // Component class name
  @HostBinding('class') readonly clsName = 'sci-social-sidebar';

  @Input() tabs!: string[];
  @Input() activeTabIndex = 0;
  @Output() activeTabIndexChanged = new EventEmitter<number>();

  setActiveTabIndex(index: number): void {
    if (index === this.activeTabIndex) {
      return;
    }

    this.activeTabIndex = index;
    this.activeTabIndexChanged.emit(index);
  }
}
