import { Component, HostBinding } from '@angular/core';
import { ActionCardItem } from '../../core/models/action-card-item';


@Component({
  selector: 'sci-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  /** HTML class name */
  @HostBinding('class') readonly clsName = 'sci-home';

  testActionItem: ActionCardItem = {
    title: 'Course Title',
    subtitle: 'April 28, 2020',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque cursus vitae diam vel volutpat. Pellentesque venenatis velit lectus, tempor dictum tortor pretium nec.',
    buttonLabel: 'INFO/REGISTRATION',
    buttonLink: 'www.google.com',
    imageSource: 'assets/action-card/image1.png'
  };
}
