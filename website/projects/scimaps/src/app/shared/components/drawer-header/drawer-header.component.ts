import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';


@Component({
  selector: 'sci-drawer-header',
  templateUrl: './drawer-header.component.html',
  styleUrls: ['./drawer-header.component.scss']
})
export class DrawerHeaderComponent {

  @HostBinding('class') className = 'sci-drawer-header';

  @Input() title = '';
  @Input() backText = '';
  @Output() backClick: EventEmitter<string> = new EventEmitter();

}
