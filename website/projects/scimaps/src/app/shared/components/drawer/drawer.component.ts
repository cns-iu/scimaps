import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sci-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {
  ngOnInit() {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
  }
}
