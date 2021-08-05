import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'sci-drawer-header',
  templateUrl: './drawer-header.component.html',
  styleUrls: ['./drawer-header.component.scss']
})
export class DrawerHeaderComponent implements OnInit {

  @HostBinding('class') className = 'sci-drawer-header'
  
  @Input() title = '';
  @Output() backClick: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
