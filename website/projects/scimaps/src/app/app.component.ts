import { Component } from '@angular/core';


@Component({
  selector: 'sci-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scimaps';

  readonly slides = [
    'assets/images/benches.jpg',
    'assets/images/bridge.jpg',
    'assets/images/flower.jpg',
    'assets/images/garden.jpg',
  ];
}
